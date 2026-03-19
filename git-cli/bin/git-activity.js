#!/usr/bin/env node
// const https = require("https")
import https from 'https'
import chalk from 'chalk'
// const chalk = require("chalk")

const userName = process.argv[2]
if(!userName){
    console.log("please enter a valid username...");
    process.exit(1)
}
console.log("Fetching data for : ", userName);

const url = `https://api.github.com/users/${userName}/events`
const options = {
    headers:{
        "user-agent": "node"
    }
}

https.get(url, options, (res)=>{
    console.log(res.statusCode);
    let data = ""
    res.on("data", (chunk)=>{
        data += chunk
    })

    res.on("end", ()=>{
        const events = JSON.parse(data)

        if(events.length === 0){
            console.log("no event fouund here");
        }
        events.slice(0,5).forEach(event =>{
            if(event.type === "PushEvent"){
                console.log(chalk.blue(`Pushed to ${event.repo.name}`));
            }
            else if(event.type === "CreateEvent"){
                console.log(chalk.green(`Created Repository ${event.repo.name}`));
            }
            else if(event.type === "WatchEvent"){
                console.log(`Starred ${event.repo.name}`);
            }
            else if(event.type === "IssuesEvent"){
                console.log(`Opened Issue in ${event.repo.name}`);
            }
        });

        // console.log(data);
        
    })

    // console.log(url);
})
