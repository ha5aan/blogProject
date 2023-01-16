// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BlogMaintainaince } from "../../utilityClass/BlogRepository";

export default async function handler(req, res) {
  console.log(req.query.slug)

    let blog = new BlogMaintainaince();
    await blog.makeConnection()
let data= await blog.getBlogByID(req.query.slug)
   // console.log(data)
   return  res.status(200).json(data)
  
}
