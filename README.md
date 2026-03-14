# Task Tracker CLI

A simple **Command Line Interface (CLI)** tool built with Node.js to manage your daily tasks.
You can add tasks, list them, mark them as completed or in progress, and delete them directly from the terminal.
---

## Features

* Add new tasks
* List all tasks
* Delete tasks
* Mark tasks as completed
* Mark tasks as in progress
---
Previously, tasks were stored in the project directory, which caused issues when running the CLI from different locations in the terminal. By moving the storage to the user's home directory:-
Tasks remain accessible from any directory
Data persists independently of the project folder
The CLI behaves more like professional command-line tools

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
---
```
If the .task-cli directory or task.json file does not exist, the program automatically creates them.
Learning project for understanding Node.js CLI development.
