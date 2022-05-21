const MongoClient = require('mongodb');
const { async } = require('rxjs/internal/scheduler/async');


const uri = "mongodb+srv://admin:admin-raciit@raciit-portal.ymgp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);
try {
    await client.connect();
    console.log('connected')
} catch (e) {
    console.log(e)
    console.error(e);
} finally {
    await client.close();
}

// async function connect() {

//     const uri = "mongodb+srv://admin:admin-raciit@raciit-portal.ymgp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();
//         console.log('connected')
//     } catch (e) {
//         console.log(e)
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

module.exports = {
    client
}

// connect();
