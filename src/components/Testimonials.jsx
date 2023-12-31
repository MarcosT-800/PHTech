import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[55%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 pl-6 relative z-[1] bg-red-700 rounded-[20px] box-shadow">
      <h2 className={styles.heading2}>
        Quem contrata, <br className="sm:block hidden" /> indica!
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Descubra as opiniões e experiências das pessoas que confiaram em nossos serviços. Nada é mais valioso do que as palavras de nossos clientes.
        </p>
      </div>
    {/*   <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
