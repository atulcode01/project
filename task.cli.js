#!/usr/bin/env node
const { log } = require("console");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "task.json"); 
// here it is assigning the currnet path of task.json to the data to read file 

const data = fs.readFileSync(filePath, "utf-8"); 
// here the file can read the currnt path of task.json 

const task = JSON.parse(data);

//task add "first task"
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
    const findTask = task.find(t => t.id === id)
    if(process.argv[3] === ""){
        console.log("Task not found...");
    }if(!findTask){
        console.log("Task not found...");
    }
    else{
        fs.writeFileSync("task.json", JSON.stringify(updatedTask, null, 2))
        console.log("task Deleted...");
    }
}

if(commandOne === "done"){
    const id = parseInt(process.argv[3])
    const tasks = task.find(t => t.id === id)
    if(tasks){
        tasks.status = "Completed"
        fs.writeFileSync("task.json", JSON.stringify(task, null, 2))
    }else{
        console.log("task not found");
        
    }
    console.log("Status changed Successfully...");
}

if(commandOne === "continue"){
    const id = parseInt(process.argv[3])
    const tasks = task.find(t => t.id === id)
    if(tasks){
        tasks.status = "In Progress"
        fs.writeFileSync("task.json", JSON.stringify(task, null, 2))
    }else{
        console.log("task not found");
        
    }
    console.log("Status changed Successfully...");
    
}
