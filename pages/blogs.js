import React from 'react';
import styles from '../styles/Blogs.module.css'
 import Link from 'next/link';
 import { useState,useEffect } from 'react';
 import InfiniteScroll from 'react-infinite-scroll-component';

const Blogs = (props) => {
    console.log(props,"props")
    const [blogs, setBlogs] = useState(props.allBlogs);
    const [count, setCount] = useState(1)
 
    const fetchData = async () => {
        let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 1}`)
        setCount(count + 1)
        let data = await d.json()
        setBlogs(data)
    };



    return  <div className={styles.container}>
    <main className={styles.main}>
    <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchData}
        hasMore={props.allCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {blogs.map((blogitem) => {
          return <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
            <p className={styles.blogItemp}>{blogitem.content.substr(0, 140)}...</p>
            <Link href={`/BlogPosts/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>
          </div>
        })}
      </InfiniteScroll>
    </main>
</div>
};
 
export default Blogs;


export async function getServerSideProps(context) {
    let data = await fetch('http://localhost:3000/api/blogs?count=1')
    let allBlogs = await data.json()

    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}
