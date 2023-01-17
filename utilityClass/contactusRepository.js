// import MDBConnect from "../lib/mongodb"
import ContactUS from '../lib/contactusMongo';
var mongo = require('mongodb');
export class ContactMaintainaince{


mongoDBObject= new ContactUS()
database
async makeConnection(){
this.database= await this.mongoDBObject.openConnection()
}


 async getAllContacts(numberOfBlogs) {
 let allBlogs =await this.database.collection("Contact").find({}).limit(numberOfBlogs).toArray();
 console.log(allBlogs)
    return  allBlogs
}

async postObject(bodyObject){
 let RecordInserted = this.database.collection("Contact").insertOne(bodyObject)
   return true
}
async getContactByID(blogId){
    console.log(blogId,"blogID")
    var o_id = new mongo.ObjectID(blogId);

    let selectedBlogs =await this.database.collection("Contact").findOne({_id:o_id});
    console.log(selectedBlogs,"ReturnedBLog")
       return  selectedBlogs
}
}
// "_id": {
//     "$oid": "63c505659013269e61f35320"
//   },