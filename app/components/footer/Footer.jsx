import React from 'react'
import Styles from './footer.module.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className={Styles.container} >
      <div className={Styles.logo} >
        Ividhan
        <div className={Styles.logo_text} > 
        ©2023 All Right Reserved.
        </div>
      </div>
      <div className={Styles.social} >
        <Image src='/1.png' width={15} height={15} className={Styles.icons}   alt='Ividhan'/>
        <Image src='/2.png' width={15} height={15} className={Styles.icons}   alt='Ividhan'/>
        <Image src='/3.png' width={15} height={15} className={Styles.icons}  alt='Ividhan'/>
        <Image src='/4.png' width={15} height={15}  className={Styles.icons}  alt='Ividhan'/>
      </div>
    </div>
  )
}

export default Footer;
