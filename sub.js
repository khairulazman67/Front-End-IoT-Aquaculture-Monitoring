let mqtt = require('mqtt')
let client = mqtt.connect('mqtt:localhost:1883')

let topik = 'topik1'

client.on('connect',()=>{
    client.subscribe(topik)
})
client.on('message',(topik, message)=>{
    message = message.toString()
    console.log(message)
})

