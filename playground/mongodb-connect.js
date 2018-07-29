//const MongoClient = require('mongodb').MongoClient

const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongo db')
    }
    console.log('Connected to Mongo Db')

    // db.collection('ToDos').insertOne( {
    //     text:'Something to do',
    //     completed : false
    // },(err,result)=>{
    //     if(err){
    //         return `Unable to insert todo ${err}`
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // })

    // db.collection('Users').insertOne({
    //     name : 'User1',
    //     age : 24,
    //     location : 'India'
    // },(err,result)=>{
    //     if(err){
    //         return `Unable to insert user ${err}`
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2))
    //     console.log(result.ops[0]._id.getTimestamp())
    // })

    // db.collection('ToDos').find({completed: true}).toArray().then((docs)=>{
    //     console.log('--------------------------------------------------------------------------------------------------')
    //     console.log('ToDos')
    //     console.log(JSON.stringify(docs,undefined,2))
    //     console.log('--------------------------------------------------------------------------------------------------')
    // },(err)=>{
    //     console.log(`Unable to fetch ToDos ${err}`)
    // })


    // db.collection('ToDos').find({completed: true}).count().then((count)=>{
    //     console.log('--------------------------------------------------------------------------------------------------')
    //     console.log(`Total ToDos ${count}`)
    //     console.log('--------------------------------------------------------------------------------------------------')
    // },(err)=>{
    //     console.log(`Unable to fetch ToDos ${err}`)
    // })

    // db.collection('Users').find({name : "User1"}).toArray().then((docs)=>{
    //     console.log('----------------------------------------------------------------------------')
    //     console.log('Users')
    //     console.log(JSON.stringify(docs,undefined,2))
    //     console.log('----------------------------------------------------------------------------')
    // },(err)=>{
    //     console.log(`Error while fetching users data ${err}`)
    // })

    // db.collection('Users').find({_id : new ObjectID("5b5d6d0a46dd3d16d8e1c2c7")}).toArray().then((docs)=>{
    //     console.log('----------------------------------------------------------------------------')
    //     console.log('Users')
    //     console.log(JSON.stringify(docs,undefined,2))
    //     console.log('----------------------------------------------------------------------------')
    // },(err)=>{
    //     console.log(`Error while fetching users data ${err}`)
    // })
    // db.collection("ToDos").deleteMany({text : "Eat Lunch"}).then((result)=>{
    //     console.log(result)
    // },(err)=>{
    //     console.log(err)
    // })
    // db.collection("ToDos").findOneAndDelete({ text: "Eat Lunch" }).then((result) => {
    //     console.log(result)
    // }, (err) => {
    //     console.log(err)
    // })

    db.collection("Users").findOneAndUpdate({ _id : new ObjectID('5b5d6d0a46dd3d16d8e1c2c7')},
    {
        $set:{
            name : "Anurag Kumar"
        },
        $inc : {
            age : 1
        }
    },{
        returnOriginal:false
    }).then((res)=>{
        console.log(res)
    })

    db.close()
})