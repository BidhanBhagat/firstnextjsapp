"use client"
import Image from 'next/image'
import Styles from './page.module.css'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <div className={Styles.container} >
      <div className={Styles.item} >
        <h1 className={Styles.title}>Want to learn code ?</h1>
        <h2>
        <TypeAnimation
      sequence={[
        'Go for HTML',2000,
        'Go for CSS',2000,
        'Go for JAVASCRIPT',2000,
        'Go for PYTHON',2000,
        'Go for C/C++',2000,
        'Go for JAVA',2000,
]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.8em', display: 'inline-block', color:'#53c28b' }}
      repeat={Infinity}/></h2>
      <p className={Styles.desc} >Confused on which course to take? I have got you covered. Browse courses and find out the best course for you.
         Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.
      </p>
      <button className={Styles.btn
      } >Go for it</button>
      </div>
      <div className={Styles.item}>
        <Image src='/hero.png' width={450} height={600} alt='' className={Styles.img}/>
      </div>
    </div>
  )
}
