import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar'


export default function Home(props) {
  console.log(props)
  return (
    <>

      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Lets Learn something&nbsp;
            <Link href='/blogs'>  <code className={styles.code}> Continue </code></Link>
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/muhammad-hasaan-239345180/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <span className={styles.nameOfMaker}>
             Muhammad Hasaan
             </span>
            </a>
          </div>
        </div>


        <div className={styles.center}>
          <h1> &lt;HuntingCoder/&gt;</h1>
         
        </div>
        <div className={styles.imagewrap} >
        <Image className={styles.myImg} src="/coderImages.png" width={237} height={158} />
         
        </div>
       
        <h2>Latest Blogs</h2>
        <div className={styles.grid}>
        {  props.allBlogs.map((Blog)=>{
 return  (       <a key={Blog._id}>
              <h3>{Blog.Title}</h3>
            <p>JavaScript is the language used to design logic...</p>
            <button className={styles.btn}>Read More</button>
          </a>)
})

}

          {/* <a>
          <h3>How to learn JavaScript in 2022?</h3>
          <p>JavaScript is the language used to design logic...</p>
            <button className={styles.btn}>Read More</button>
          </a>

          <a>
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic...</p>
            <button className={styles.btn}>Read More</button>
          </a> */}

  
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/getBlogsFromMongoDB?count=3')
  console.log(data)
  let allBlogs = await data.json()
console.log(allBlogs)
  return {
      props: { allBlogs:allBlogs.data }, // will be passed to the page component as props
  }
}
