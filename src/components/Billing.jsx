import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src='./imagem_homem de preto.png' alt="billing" className="w-[100%] h-[auto] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Junte-se a nós,<br className="sm:block hidden" />Seja Nosso Parceiro de Sucesso Financeiro.
      </h2>
      <p className={`${styles.paragraph} max-w-[870px] mt-5`}>
      A PH Tech é a nossa fintech criada especialmente para Corban, oferecendo o produto FGTS para impulsionar seus negócios e aumentar seus lucros. Oferecemos vantagens incríveis, como saques a partir de 50 reais, pagamentos aos finais de semana e transferências via PIX, garantindo que seus clientes recebam o dinheiro em até 3 minutos. Além disso, nosso sistema de comissões oferece recebimentos em D+1, com um gerenciamento completo e eficiente, atendendo às necessidades de você e seus clientes.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button />
      </div>
    </div>
  </section>
);

export default Billing;
