import { base } from "../../../assets";
import styles from "./SectionTwo.module.css"


const sectionData = [
  {
    id: 1,
    title: "Unlock Your  Global Potential",
    subtitle: "Study Abroad",
    description:
      "Embark on a transformative journey of learning and discovery with our study abroad programs. Gain valuable insights, immerse yourself in diverse cultures, and broaden your horizons.",
    img: base,
  },
  {
    id: 2,
    title: "Seamless Passage to Your Destination",
    subtitle: "Visa Processing",
    description:
      "Navigate the complexities of visa procedures effortlessly. Our expert team ensures a smooth and hassle-free process, allowing you to focus on the excitement of your upcoming adventure.",
    img: base,
  },
  {
    id: 3,
    title: "Charting Your Academic Success",
    subtitle: "EDUCATIONAL CONSULT",
    description:
      "Empower your educational journey with personalized guidance and support. From course selection to career planning, our consultants are dedicated to helping you achieve your academic goals.",
    img: base,
  },
  {
    id: 4,
    title: "Unlock the World with Words",
    subtitle: "Language Institute",
    description:
      "Immerse yourself in the beauty of language and culture. Our institute offers immersive language courses tailored to your proficiency level, providing a gateway to global communication and connection.",
    img: base,
  },
  {
    id: 5,
    title: "Crafting Unforgettable Memories",
    subtitle: "Tours and Vacation",
    description:
      "Embark on unforgettable journeys to breathtaking destinations. Our meticulously curated tours offer enriching experiences, cultural encounters, and the opportunity to create lifelong memories.",
    img: base,
  },
];


const SectionTwo = () => {
  return (
    <section className={styles.section}>
        <div className={styles.wrapper}>
\            {sectionData.map(i => {
              return (
                <div key={i.id} className={styles.content_container}>
                    <div className={styles.img}>
                      <img src={i.img}  />
                    </div>
                    <div className={styles.content}>
                      <h6>{i.subtitle}</h6>
                      <h2>{i.title}</h2>
                      <p>{i.description}</p>
                    </div>
                </div>
              )
            })}
        </div>
    </section>
  )
}

export default SectionTwo