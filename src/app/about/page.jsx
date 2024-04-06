import Image from "next/image";
import styles from "./about.module.css";

export const generateMetadata =  () => {


  return {
    title: "About Page",
    description: "About Desc",
  };
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About AIPILOT</h2>
        <h1 className={styles.title}>We Create Ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}>
          we create digital ideas that are bigger, bolder , braver and better.
          we believe in good odeas flexbility and precossopn Were worlds Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>3+</h1>
            <p>Years of experiences</p>
          </div>
          <div className={styles.box}>
            <h1>3+</h1>
            <p>Areas we serve</p>
          </div>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Companies we provide services to</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
        src="/about.png"
        alt="About Image"
        fill
        className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
