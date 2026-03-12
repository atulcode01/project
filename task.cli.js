#!/usr/bin/env node
const { log } = require("console");
const fs = require("fs");

const data = fs.readFileSync("task.json", "utf-8");
const task = JSON.parse(data);

const commandOne = process.argv[2]
const taskDescription = process.argv[3]

// console.log(command);

if(commandOne === "add"){
    const newTask = {
        id: task.length + 1,
        description: taskDescription,
        status: "Started"
    };
    task.push(newTask);
    fs.writeFileSync("task.json",JSON.stringify(task,null,2));
    console.log("task added succesfully...");
}

if(commandOne === "list"){
    task.forEach(task => {
        console.log(`${task.id}. ${task.description} - ${task.status}`);
    });
}

if(commandOne === "delete"){
    const id = parseInt(process.argv[3]);
    const updatedTask = task.filter(task => task.id!==id)
    fs.writeFileSync("task.json", JSON.stringify(updatedTask, null, 2))
    console.log("task Deleted...");
}

if(commandOne === "done"){
    const id = parseInt(process.argv[3])
    const tasks = task.find(t => t.id === id)
    if(task){
        fs.writeFileSync("task.json", JSON.stringify(tasks, null, 2))
        task.status = "Completed"
    }else{
        console.log("task not found");
        
    }
    console.log("Status changed Successfully...");
}
if(commandOne === "continue"){
    const id = parseInt(process.argv[3])
    const tasks = task.find(t => t.id === id)
    if(task){
        fs.writeFileSync("task.json", JSON.stringify(tasks, null, 2))
        task.status = "In Progress"
    }else{
        console.log("task not found");
        
    }
    console.log("Status changed Successfully...");
    
}
