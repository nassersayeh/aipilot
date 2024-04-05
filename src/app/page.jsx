"use client"
import styles from './home.module.css'
import Lottie from 'lottie-react'
import dev from '../../public/animation/dev.json'
import '../../public/style.css'
import Link from 'next/link';
const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>AIPilot Software, Inc. Where Vision Meets Innovation</h1>
      <p className={styles.desc}>AIPILOT has been providing software engineering in the Worldwide IT market. Distinguished by excellence in planning, execution and supporting business driven technology solutions, AIPILOT provides high-value partnerships for our clients.</p>
      <div className={styles.buttons}>
      <Link href="/about" className={styles.button}>Learn More</Link >
      <Link href="/contact" className={styles.button}>Contact</Link >
      
      </div>
      <div className={styles.brands}>
          <Link href="/" className=" icon-twitter"></Link>
          <Link href="https://www.instagram.com/aipilot.pal/"  className=" icon-instagram"></Link>
          <Link href="https://github.com/nassersayeh" className=" icon-github"></Link>
          <Link href="https://www.linkedin.com/company/aipilot-software-inc"  className=" icon-linkedin"></Link>
        </div>
    </div>
    <div className={styles.imageContainer}>
        <Lottie  className='contactanimation' style={{height:300}} animationData={dev}/>
    </div>

  </div>;
};

export default Home;