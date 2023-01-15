// import { MongoClient } from "mongodb";
// import connectToMongo from "../../lib/mongodb"
// import ConnectToDatabase from "../../middleware/ConnectionFile";
// import connectionToDBCHECK from "../../lib/mongodb"; 
//import {MDBConnect} from "../../lib/mongodb"
import MDBConnect from "../../lib/mongodb";

// const uri = "mongodb+srv://hasaan:hasaan654321@cluster0.tavhveu.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);



export default async function handler( req,res,middleware) {
  let DBConnection= await MDBConnect.openConnection()
//  console.log(await ConnectToDatabase ,"dataConnection")
    switch (req.method) {
      case "POST":
        console.log(req.body)
        let bodyObject =req.body;
        console.log(bodyObject)
        let myPost = await DBConnection.collection("Blog").insertOne(bodyObject);
        res.json(myPost.ops[0]);
        break;
      case "GET":
        console.log("In all get posts")
        const allPosts = await DBConnection.collection("Blog").find({}).toArray();
        res.json({ status: 200, data: allPosts });
        break;
    }
    
  }

