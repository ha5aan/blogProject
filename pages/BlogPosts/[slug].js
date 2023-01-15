import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import { useState,useEffect } from 'react';
const Post = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  function createMarkup(c) {
    return {__html: c};
  }

  return <div className={styles.container}>
  <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
      {blog && <div  dangerouslySetInnerHTML={createMarkup(blog.content)}/> }
                 
  </main>
</div>;
}

export default Post

export async function getServerSideProps(context) {

  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()
  return {
      props: { myBlog }, // will be passed to the page component as props
  }
}