// import { MongoClient } from "mongodb";
// import connectToMongo from "../../lib/mongodb"
// import ConnectToDatabase from "../../middleware/ConnectionFile";
// import connectionToDBCHECK from "../../lib/mongodb"; 
//import {MDBConnect} from "../../lib/mongodb"
// import MDBConnect from "../../lib/mongodb";
import { BlogMaintainaince } from "../../utilityClass/BlogRepository";

// const uri = "mongodb+srv://hasaan:hasaan654321@cluster0.tavhveu.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);



export default async function handler( req,res) {

 let blogsSite =  new BlogMaintainaince()
 await blogsSite.makeConnection()
 
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
       let numberToGet= parseInt(req.query.count)
        const allPosts = await blogsSite.getAllBlogs(numberToGet);
        res.json({ status: 200, data: allPosts });
        break;
    }
    
  }

