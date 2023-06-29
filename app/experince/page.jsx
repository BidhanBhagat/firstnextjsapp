import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";

const portfolio = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.section1}>
        <div className={Styles.left}>
          <h1 className={Styles.left_text}>
            Want to hone your skills and gain experience?
          </h1>
          <p className={Styles.left_desc}>
            A platform where you will explore, experiment, learn, participate
            and build a project based on an industry-defined approach.
          </p>
          <button className={Styles.left_btn}>Explore Now</button>
        </div>
        <div className={Styles.right}>
          <Image
            src="/experince.png"
            width={600}
            height={470}
            alt=""
            className={Styles.right_img}
          ></Image>
        </div>        
      </div>
      <div className={Styles.section2}>
        <div className={Styles.title}>
          <h1 className={Styles.title2}>What will you get?</h1>
        </div>
        <div className={Styles.service2}>
          <div className={Styles.leftsub_sec}>
            <h2>Learn HTML,CSS,JAVASCRIPT!</h2>
            <p>
              A platform where you will explore, experiment, learn, participate
              and build a project based on an industry-defined approach. Explore
              Now
            </p>
          </div>
          <div className={Styles.rightsub_sec}>
            <Image src="/experince3.png" alt="" height={400} width={500} />
          </div>
        </div>
        <div className={Styles.service3}>
          <div className={Styles.leftsub_sec1}>
            <h2>Learn HTML,CSS,JAVASCRIPT!</h2>
            <p>
              A platform where you will explore, experiment, learn, participate
              and build a project based on an industry-defined approach. Explore
              Now
            </p>
          </div>
          <div className={Styles.rightsub_sec1}>
            <Image src="/experince4.png" alt="" height={400} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
