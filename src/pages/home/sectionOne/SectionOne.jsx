import styles from "./SectionOne.module.css"


const stats = [
  {
    id: 1,
    stats: "730 +",
    title: "Visa Processed",
    description:
      "Navigate hassle-free journeys with our expertise as we successfully process over 730 visas, ensuring a smooth and efficient travel experience",
  },
  {
    id: 2,
    stats: "1000 +",
    title: "Student Admissions",
    description:
      "Empowering dreams, we've facilitated over 1000 student admissions, helping individuals unlock the doors to quality education and brighter futures.",
  },
  {
    id: 3,
    stats: "15",
    title: "Countries",
    description:
      "Explore educational opportunities across borders! Lampstand opens doors to knowledge in 15 diverse countries, fostering global learning experiences.",
  },
];


const StatsComp = () => {
  return(
    <div className={styles.stats_container}>
      {stats.map(i => (
        <div className={styles.stats_item} key={i.id}>
          <h2>{i.stats}</h2>
          <h4>{i.title}</h4>
          <p>{i.description}</p>
        </div>
      ))}

    </div>
  )
}

const SectionOne = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.excel}>
          <span className={styles.subtitle}>Excellence</span>
          <h2>Over half a decade of unwavering commitment to excellence.</h2>
          <p>
            Our longstanding legacy is a testament to our dedication in
            providing unparalleled educational immigration consulting and travel
            services. With a rich history of success, we continue to set the
            standard for excellence in guiding aspiring minds towards their
            educational goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionOne