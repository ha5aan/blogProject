import * as fs from 'fs';

import { ContactMaintainaince } from '../../utilityClass/contactusRepository';
export default async function handler(req, res) {
  let ContactObject = new ContactMaintainaince()
  await ContactObject.makeConnection()

    if (req.method === 'POST') {
      
  console.log(req.body)
  console.log(ContactObject.postObject(req.body))
  // let data = await fs.promises.readdir('contactdata');
  // fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body))
  res.status(200).json(req.body)
    } else {
        // Handle any other HTTP method
        res.status(200).json(["allBlogs"])
         //   name, email, desc, phone
    }
}