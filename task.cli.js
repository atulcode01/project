#!/usr/bin/env node
const { log } = require("console");
const fs = require("fs");
const path = require("path");
const os = require("os")

const homeDir = os.homedir()
/* from here this task.json is not in use for current inputs because task are storing in the global os file */

//here we add a functionality to add the task on my own OS on home directory
const folderPath = path.join(homeDir,".task-cli")
if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath) //checck if not exist then create 
}

const filePath = path.join(folderPath, "task.json"); 
// here it is assigning the currnet path of task.json to the data to read file 

// here the file can read the currnt path of task.json 
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,JSON.stringify([],null,2))
}

const data = fs.readFileSync(filePath, "utf-8"); 

const task = JSON.parse(data);

//task add "first task"
const commandOne = process.argv[2] // here it is used to take or read CLI commands 
const taskDescription = process.argv[3]

// console.log(command);

if(commandOne === "add"){
    const newTask = {
        id: task.length + 1,
        description: taskDescription,
        status: "Started"
    };
    task.push(newTask); //used to add the task to the array in the temprory memory 
    fs.writeFileSync(filePath,JSON.stringify(task,null,2)); //here it confirms that it is written 
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
        fs.writeFileSync(filePath, JSON.stringify(updatedTask, null, 2))
        console.log("task Deleted...");
    }
}

if(commandOne === "done"){
    const id = parseInt(process.argv[3])
    const tasks = task.find(t => t.id === id)
    if(tasks){
        tasks.status = "Completed"
        fs.writeFileSync(filePath, JSON.stringify(task, null, 2))
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
        fs.writeFileSync(filePath, JSON.stringify(task, null, 2))
    }else{
        console.log("task not found");
        
    }
    console.log("Status changed Successfully...");
    
}
