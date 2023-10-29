import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src='https://www.serasa.com.br/assets/cms/2022/lno-hero.png' alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Junte-se a nós,<br className="sm:block hidden" />Seja Nosso Parceiro de Sucesso Financeiro.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Convidamos você a fazer parte da nossa jornada de sucesso financeiro. Venha fazer a diferença conosco!
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button />
      </div>
    </div>
  </section>
);

export default Billing;
