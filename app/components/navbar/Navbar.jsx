"use client"
import React from 'react'
import Link from 'next/link'
import Styles from './page.module.css'

const links = [

 {
   id:1,
   title:"Home",
   url:"/"
 },
 {
   id:2,
   title:"Experince Portal",
   url:"/experince"
 },
 {
   id:4,
   title:"About",
   url:"/about"
 },
 {
   id:5,
   title:"Contact",
   url:"/contact"
 },
]

const Navbar = () => {
  return (
    <div className={Styles.container} >
      <div className={Styles.logo} >
        <Link href='/' >Ividhan</Link>
      </div>
      <div className={Styles.links} >
        {links.map(link=>(
          <Link key={link.id} href={link.url} className={Styles.link} >{link.title}</Link>
        ))}
        <button className={Styles.logout} onClick={()=>{
          console.log("logged out")
        }}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
