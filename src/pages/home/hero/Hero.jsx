import styles from "./hero.module.css"
import {Button} from "antd"

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container} >
        <div className={styles.heading}>
          <span className={styles.subtitle}>Lampstand Travels & Edu Consult</span>
          <h1>
            Your gateway to stress free <br /> educational travel.
          </h1>
          <p>
            Unlock limitless opportunities with our comprehensive educational
            travel services. We specialize in guiding you through every step of
            your educational pursuits abroad.
          </p>
        </div>
        <div className={styles.cta}>

          <Button type="primary"> Make request</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero