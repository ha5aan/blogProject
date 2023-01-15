// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';


export default async function handler(req, res) {
    let data = await fs.promises.readdir("blogsdata");
    data = data.slice(0, parseInt(req.query.count))
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item)
        myfile = await fs.promises.readFile(('blogsdata/' + item), 'utf-8')
        console.log(JSON.parse(myfile))
        allBlogs.push(JSON.parse(myfile))
      }
      res.status(200).json(allBlogs)
}
