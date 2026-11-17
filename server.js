const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: 'company_operations'
});

app.get('/api/employees', (req, res) => {
    db.query('SELECT * FROM employees ORDER BY emp_id ASC', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.get('/api/tasks', (req, res) => {
    const query = `
        SELECT t.*, e.full_name AS employee_name, e.department 
        FROM tasks t 
        LEFT JOIN employees e ON t.assigned_to = e.emp_id 
        ORDER BY t.task_id DESC
    `;
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.post('/api/tasks', (req, res) => {
    const { title, description, assigned_to, priority, due_date } = req.body;
    const query = 'INSERT INTO tasks (title, description, assigned_to, priority, due_date) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [title, description, assigned_to, priority || 'Medium', due_date], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Task created successfully', taskId: result.insertId });
    });
});

app.patch('/api/tasks/:id', (req, res) => {
    const { status } = req.body;
    db.query('UPDATE tasks SET status = ? WHERE task_id = ?', [status, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Task status updated' });
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
