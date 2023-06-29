import React from 'react'
import Styles from './page.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}>
        <Image src='/apps.jpg'  alt=''
        fill={true} className={Styles.img} />
        <div className={Styles.imgtext}>
          <h1 className={Styles.imgtitle}>About US</h1>
          <h2 className={Styles.desc}>Ividhan Skills is the result of a continual effort to exponentially increase the employability of every
           Indian, irrespective of their socioeconomic status</h2>
        </div>
      </div>
      <div className={Styles.textcontainer}>
        <div className={Styles.mission}>
          <h1 className={Styles.misstitle} >Our Mission</h1>
          <p className={Styles.missdesc} >Ividhan Skills' mission is to permeate through every student/professional's outlook towards jobs and change their attitude and perspective from “How Can I Do It?” to “Of Course I Can Do It”. We aim to do this by providing exceptional upskilling courses at affordable rates, while being tech-forward so anyone, anywhere 
          can access and improve their ability to be successful in life.</p>
          <Image src='/mission.png' alt='' width={550} height={450} className={Styles.missimg} />
        </div>
        <div className={Styles.service}>
          <h1 className={Styles.misstitle}>Our Services</h1>
          <div className={Styles.services}>
            <div className={Styles.service1}>
              <Image src='/service-1.png' alt='' width={100} height={100}/>
              <h3>Affordable online courses</h3>
              <p>Affordable online courses along with learning communities.</p>
            </div>
            <div className={Styles.service1}>
              <Image src='/service-2.png' alt='' width={100} height={100}/>
              <h3>Affordable online courses</h3>
              <p>Affordable online courses along with learning communities.</p>
            </div>
            <div className={Styles.service1}>
              <Image src='/service-4.png' alt='' width={100} height={100}/>
              <h3>Affordable online courses</h3>
              <p>Affordable online courses along with learning communities.</p>
            </div>
            <div className={Styles.service1}>
              <Image src='/service-5.png' alt='' width={100} height={100}/>
              <h3>Affordable online courses</h3>
              <p>Affordable online courses along with learning communities.</p>
            </div>
            <div className={Styles.service1}>
              <Image src='/service-7.png' alt='' width={100} height={100}/>
              <h3>Affordable online courses</h3>
              <p>Affordable online courses along with learning communities.</p>
            </div>
            <div className={Styles.service1}>
              <Image src='/service-8.png' alt='' width={100} height={100}/>
              <h3>Affordable online courses</h3>
              <p>Affordable online courses along with learning communities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default page
