const { MongoClient } = require('mongodb');  
  
const uri = "mongodb://localhost:27017/"; // Replace with your connection string  
  
const client = new MongoClient(uri);  
  
async function run() {  
try {  
 await client.connect();  
  
 console.log('Connected to MongoDB Server');  
  
 // ... your database operations here ...  
  
  
const db = client.db('db1'); const 
studentsCollection = db.collection('student'); 
const coursesCollection = db.collection('courses');  
  
  
const newStudent = {  
 _id: '3',  
 name: 'Krishna',  
age: 19,  
 grades: [90, 87, 99],  
 courses: ['Math', 'Science', 'IT']  
};  
  
const result = await studentsCollection.insertOne(newStudent); console.log('Inserted Document:', result);  
  
  
 } finally {  
 // Ensures that the client will close when you finish/error  
await client.close();  
 } }  
run().catch(console.dir);  