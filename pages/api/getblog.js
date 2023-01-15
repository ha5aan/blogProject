// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';


export default function handler(req, res) {
  console.log(req.query.slug)
  fs.readFile(`blogsdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: "No such blog found" })

    }
    console.log(req.query.slug)
   return  res.status(200).json(JSON.parse(data))
  })
}
