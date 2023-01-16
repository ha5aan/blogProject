import MDBConnect from "../lib/mongodb"
var mongo = require('mongodb');
export class BlogMaintainaince{


mongoDBObject= new MDBConnect()
database
async makeConnection(){
this.database= await this.mongoDBObject.openConnection()
}


 async getAllBlogs(numberOfBlogs) {
 let allBlogs =await this.database.collection("Blog").find({}).limit(numberOfBlogs).toArray();
 console.log(allBlogs)
    return  allBlogs
}

async postObject(bodyObject){
 let RecordInserted = this.database.collection("Blog").insertOne(bodyObject)
   return RecordInserted.ops[0]
}
async getBlogByID(blogId){
    console.log(blogId,"blogID")
    var o_id = new mongo.ObjectID(blogId);

    let selectedBlogs =await this.database.collection("Blog").findOne({_id:o_id});
    console.log(selectedBlogs,"ReturnedBLog")
       return  selectedBlogs
}
}
// "_id": {
//     "$oid": "63c505659013269e61f35320"
//   },