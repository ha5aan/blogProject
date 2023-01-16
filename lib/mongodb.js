import { MongoClient } from 'mongodb'

//const uri = "mongodb+srv://hasaan:hasaan654321@cluster0.tavhveu.mongodb.net/?retryWrites=true&w=majority"
 class MDBConnect{
    dbo
   constructor(){
      console.log("Constructor called ##################")
      MongoClient.connect("mongodb+srv://hasaan:hasaan654321@cluster0.tavhveu.mongodb.net/?retryWrites=true&w=majority",(err,db)=>{
         if(err) throw err;
         this.dbo= db.db("BlogsSite")
         this.dbo.listCollections({name: "Blog"})
             .next(function(err, collinfo) {
                 if (collinfo) {
                     console.log("Collection exists")
                     return
                 }
                 else{
                  this.dbo.createCollection("Blog", {
                     validator: {
                        $jsonSchema: {
                           bsonType: "object",
                           title: "Blog site by Muhammad Hasaan",
                           
                           required: [ "Title", "Content", "Author", "slug" ],
                           properties: {
                             Title: {
                                 bsonType: "string",
                                 description: "Title of blog must be string"
                              },
                              Content: {
                               bsonType: "string",
                               description: "Content of blog must be string"
                            },
                            Author: {
                             bsonType: "string",
                             description: "Auther of blog must be string",
                             
                          },
                           Slug: {
                           bsonType: "string",
                             description: "slug of blog must be string",
                        },
                           }
                        }
                     }
                  } );
                 }
             });
         
         })
   }
   toptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }

     async openConnection() {
      let client = new MongoClient("mongodb+srv://hasaan:hasaan654321@cluster0.tavhveu.mongodb.net/?retryWrites=true&w=majority",this.options);
      let clientPromise=await client.connect();
      let DBClient = await clientPromise.db("blogSite"); 
      return DBClient
   }
 }

 

export default MDBConnect
  //console.log("connecting",Object.keys (clientPromise))
  //  let DBClient = await client.connect()
//   console.log("Connected",clientPromise)

