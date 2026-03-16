#!/usr/bin/env node
const https = require("https")

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
        events.forEach(event => {
            console.log(event.type)
        });
        // console.log(data);
        
    })

    // console.log(url);
})
