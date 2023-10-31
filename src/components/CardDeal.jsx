import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      O controle é seu. <br className="sm:block hidden" /> Contrate o Empréstimo <br/>
      FGTS de onde estiver.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Na PH Tech, colocamos o controle em suas mãos. Agora, você pode contratar um Empréstimo FGTS de onde quer que esteja. Aproveite a conveniência e a liberdade de gerenciar suas finanças sem sair do seu local. Com a PH Tech, o seu bem-estar financeiro está ao seu alcance, onde quer que você esteja.
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
