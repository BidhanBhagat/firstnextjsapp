import React from 'react'
import Styles from './page.module.css'
import Image from 'next/image'

const contact = () => {
  return (
    
    <div className={Styles.container}>
      <h1 className={Styles.title}>Let's Keep In Touch</h1>
      <div className={Styles.content}>
        <div className={Styles.imgContainer}>
          <Image src='/contact.png' alt='' fill={true} className={Styles.image}/>
        </div>
          <form className={Styles.form}>
            <input type="text" placeholder="Name" className={Styles.input}/>
            <input type="text" placeholder="Email" className={Styles.input}/>
            <textarea className={Styles.textarea} placeholder='Message' cols="30" rows="10"></textarea>
          <button className={Styles.btn}>Send</button>
          </form>
      </div>
    </div>
    
  )
}

export default contact
