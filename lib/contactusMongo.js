import { MongoClient } from 'mongodb'

//const uri = "mongodb+srv://hasaan:hasaan654321@cluster0.tavhveu.mongodb.net/?retryWrites=true&w=majority"
 class ContactUS{
    dbo
   constructor(){
      console.log("Constructor called ##################")
      MongoClient.connect("mongodb+srv://hasaan:hasaan654321@cluster0.tavhveu.mongodb.net/?retryWrites=true&w=majority",(err,db)=>{
         if(err) throw err;
         this.dbo= db.db("BlogContact")
         this.dbo.listCollections({name: "Contact"})
             .next(function(err, collinfo) {
                 if (collinfo) {
                     console.log("Collection exists")
                     return
                 }
                 else{
                  this.dbo.createCollection("Contact", {
                     validator: {
                        $jsonSchema: {
                           bsonType: "object",
                           title: "Blog Contact  by Muhammad Hasaan",
                           
                           required: [ "Name", "Email", "Description" ],
                           properties: {
                             Name: {
                                 bsonType: "string",
                                 description: "Name of Contact must be string"
                              },
                              Email: {
                               bsonType: "string",
                               description: "Email of Contact must be string"
                            },
                            Description: {
                             bsonType: "string",
                             description: "Description of Contact must be string",
                             
                          }
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
      let DBClient = await clientPromise.db("BlogContact"); 
      return DBClient
   }
 }

 

export default MDBConnect
  //console.log("connecting",Object.keys (clientPromise))
  //  let DBClient = await client.connect()
//   console.log("Connected",clientPromise)

