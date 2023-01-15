import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

export default function Navbar () {
  return (
   <>
   <nav className={styles.mainnav}>
    <ul>
    <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blogs'><li>Blog</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
    </ul>
    </nav>
    
    </>
  )
}

