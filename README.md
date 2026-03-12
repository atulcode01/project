# Task Tracker CLI

A simple **Command Line Interface (CLI)** tool built with Node.js to manage your daily tasks.
You can add tasks, list them, mark them as completed or in progress, and delete them directly from the terminal.

This project is designed to practice:

* Working with the filesystem
* Handling CLI arguments
* Managing JSON data
* Building a simple CLI tool with Node.js

---

## Features

* Add new tasks
* List all tasks
* Delete tasks
* Mark tasks as completed
* Mark tasks as in progress
* Stores tasks locally in a JSON file

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-tracker-cli.git
```

### 2. Go into the project folder

```bash
cd task-tracker-cli
```

### 3. Link the CLI globally

```bash
npm link
```

Now the `task` command will work globally on your system.

---

## Usage

### Add a new task

```bash
task add "Learn Node.js"
```

Example output:

```
task added successfully...
```

---

### List all tasks

```bash
task list
```

### Delete a task

```bash
task delete 1
```

### Mark a task as completed

```bash
task done 1
```

### Mark a task as in progress

```bash
task continue 1
```

```

* **task-cli.js** → main CLI logic
* **task.json** → stores all tasks
* **package.json** → CLI configuration

---
```

---

## Requirements

* Node.js installed on your system
* npm

---


Learning project for understanding Node.js CLI development.
