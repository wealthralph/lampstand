import styles from "./SectionOne.module.css"


const SectionOne = () => {
  return (
    <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.excel}>
            <span className={styles.subtitle}>
            Excellence
            </span>
            <h2>Over half a decade of unwavering commitment to excellence.</h2>
            <p></p>
          </div>
        </div>
    </section>
  )
}

export default SectionOne