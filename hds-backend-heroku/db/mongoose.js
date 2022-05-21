const { resolve } = require('dns');
const { MongoClient } = require('mongodb');
const bcrypt = require("bcrypt");
let client = null;


async function connect() {

    const uri = "mongodb+srv://hds2022-admin:DEEp7fo4Waq3ukJx@hds2022data.skps9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    client = new MongoClient(process.env.MONGODB_URI || uri);
    try {
        await client.connect();
        console.log('connected')
    } catch (e) {
        console.log(e)
        console.error(e);
    } finally {
        await client.close();
    }
}

async function getDetails(userEmail) {

    const uri = "mongodb+srv://hds2022-admin:DEEp7fo4Waq3ukJx@hds2022data.skps9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    client = new MongoClient(process.env.MONGODB_URI || uri);

    let result;
    let data;

    try{
        await client.connect().then(async () => {
            data = await client.db("raciit-portal").collection("members").findOne({email : userEmail});
            result = 1;
        })
    }catch(error){
        console.log(error)
        result = 0;
    }

    return data;
};

async function addtodb(userDetails) {

    const uri = "mongodb+srv://hds2022-admin:DEEp7fo4Waq3ukJx@hds2022data.skps9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    client = new MongoClient(process.env.MONGODB_URI || uri);

    let result;

    try{
        await client.connect().then(async () => {
            await client.db("hds-2020-db").collection("players").insertOne(userDetails);
            result = 1;
        })
    }catch(error){
        console.log(error)
        result = 0;
    }

    return result;
};

async function getAllPlayers(){

    const uri = "mongodb+srv://hds2022-admin:DEEp7fo4Waq3ukJx@hds2022data.skps9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    client = new MongoClient(process.env.MONGODB_URI || uri);
    let data;

    try{
        await client.connect().then(async () => {

            data = await client.db("hds-2020-db").collection("players").find({}).limit(10).sort({timeTook:1});
        })
    }catch(error){
        console.log("ERROR - ", error)
        return 0;
    }

    return data;
    
}

async function deletePlayer(player){

    const uri = "mongodb+srv://hds2022-admin:DEEp7fo4Waq3ukJx@hds2022data.skps9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    client = new MongoClient(uri);
    let result;

    try{
        await client.connect().then(async () => {

            await client.db("hds-2020-db").collection("players").deleteOne({ticket : player.ticketNumber});
            result = 1;
        })
    }catch(error){
        console.log("ERROR - ", error)
        result = 0;
    }

    return result;
    
}




module.exports = {
    connect,
    addtodb,
    getAllPlayers,
    deletePlayer
}

// connect();
