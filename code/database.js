const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://itisameerkhan:Ameerkhan2003@ameerkhan.gtdpe.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";
const db = client.db(dbName);
const collection = db.collection("User");

const dbConnection = async () => {
  try {
    await client.connect();
    console.log("DB connection successfull");
  } catch (e) {
    console.log("DB connection unsuccessfull");
    console.log(e);
  }
};

dbConnection();

const findResult = async () => {
  try {
    const result = await collection.find({}).toArray();
    console.log(result);
  } catch (e) {
    console.log("---ERROR WHILE GETTING DATA-----");
    console.log(e);
  }
};

// findResult();

const insertData = async() => {
    const data = {
        firstName: "Dua",
        lastName: "Lipa",
        place: "England",
        phoneNumber: 8789278912
    }

    try {
        await collection.insertOne(data);
        console.log("INSERT SUCCESSFULL");
        
    } catch(e) {
        console.log("ERROR WHILE INSERTING");
        console.log(e);
    }
}

// insertData();

const insertDataMany = async() => {
    const data = [
        {
            firstName: "Mr",
            lastName: "Beast",
            place: "America",
            phoneNumber: 8789278912
        },
        {
            firstName: "Ishow",
            lastName: "speed",
            place: "America",
            phoneNumber: 8789278912
        },
        {
            firstName: "John",
            lastName: "Cena",
            place: "Texas",
            phoneNumber: 8789888
        }
    ]

    try {
        await collection.insertMany(data);
        console.log("INSERT SUCCESSFULL");
        
    } catch(e) {
        console.log("ERROR WHILE INSERTING");
        console.log(e);
    }
}

// insertDataMany();



const findFirstName = async() => {
    try {
        const result = await collection.find({firstName: "Dua"}).toArray();
        console.log(result);
        
    } catch(e) {
        console.log("error while finding first name");
        console.log(e);
    } 
}

findFirstName();