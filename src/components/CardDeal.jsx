import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      O controle está em suas mãos! <br className="sm:block hidden" /> Realize agora a antecipação<br/>
      do seu FGTS.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Na PH Tech, colocamos o controle em suas mãos. Agora, você pode contratar um Empréstimo FGTS de onde você estiver. Aproveite as vantagens e a liberdade de gerenciar suas finanças. Com a PH Tech, o seu bem-estar financeiro está ao seu alcance.
      </p>
{/* //referncia cnpj */}

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src='./mulher celular.png' alt="billing" className="w-[100%] h-[auto]" />
    </div>
  </section>
);

export default CardDeal;
