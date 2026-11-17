CREATE DATABASE IF NOT EXISTS company_operations;
USE company_operations;

CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    department VARCHAR(50) NOT NULL,
    role VARCHAR(50) NOT NULL,
    joined_date DATE DEFAULT (CURRENT_DATE)
);

CREATE TABLE tasks (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    assigned_to INT,
    priority ENUM('Low', 'Medium', 'High') DEFAULT 'Medium',
    status ENUM('Pending', 'In Progress', 'Completed') DEFAULT 'Pending',
    due_date DATE,
    FOREIGN KEY (assigned_to) REFERENCES employees(emp_id) ON DELETE SET NULL
);

INSERT INTO employees (full_name, email, department, role) VALUES
('Ayush Mishra', 'ayush.mishra@company.com', 'IT & Engineering', 'Full-Stack Developer'),
('Rohan Verma', 'rohan.verma@company.com', 'Operations', 'Operations Lead'),
('Priya Sharma', 'priya.sharma@company.com', 'Supply Chain', 'Logistics Coordinator');

INSERT INTO tasks (title, description, assigned_to, priority, status, due_date) VALUES
('Build REST API for Inventory Sync', 'Create Express endpoints to sync daily warehouse stock with SQL database', 1, 'High', 'In Progress', '2026-11-25'),
('Audit North Zone Dispatch Logs', 'Verify distributor delivery timestamps and pending invoices', 2, 'Medium', 'Pending', '2026-11-22'),
('Update Route Optimization Sheet', 'Map Delhi NCR delivery hubs for faster morning dispatch', 3, 'Low', 'Completed', '2026-11-18');
