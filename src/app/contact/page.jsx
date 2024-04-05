"use client"
import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import Lottie from 'lottie-react'
import contactus from '../../../public/animation/contactus.json'

const generateMetadata =  () => {


  return {
    title: "Contact Page",
    description: "Contact Desc",
  };
};
const ContactPage = () => {

  return (
    
    <div className={styles.container}>
      <div className={styles.animation}>
      <Lottie  className='contactanimation' style={{height:300}} animationData={contactus}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname"/>
          <input type="text" placeholder="Email Address"/>
          <input type="text" placeholder="Phone Number"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>

        </form>
      </div>
      
    </div>
  )
}

export default ContactPage
