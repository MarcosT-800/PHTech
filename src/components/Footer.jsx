import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start ml-20 top-1">
        <img
          src='/logo.png'
          alt="hoobank"
          className="w-[200px] h-[auto] object-contain"
        />
{/*         <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A nova forma de antecipar seu FGTS com segurança.
        </p> */}
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-red-600 cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    



    <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white text-center">
        Copyright Ⓒ 2023 PH Tech. Todos os direitos reservados.
      </p>


      
    </div>
    <div className="w-[80%] flex justify-center items-center mt-8">
  <p className="text-white text-center">
    A PH Negócios atua como correspondente bancário e está inscrita no CNPJ: 18.358.438/0001-01., com sede na Rua Fernandes Pinheiro, 449 - Tatuapé, São Paulo - SP, CEP: 03308-060.

    Nossa atividade é regulada pelo Banco Central do Brasil, nos termos da Resolução nº 3.954, de 24 de fevereiro de 2011. Nossos contatos são (11) 4765-1700 (Telefone e Whatsapp). *Contratação sujeita a análise e aprovação.

    Taxas comparativas para empréstimo com garantia de Saque Aniversário: Taxas da operação: Taxa de Juros + IOF: 2,04% a.m. - Custo Efetivo Total: 26,70% a.a. Pagamento antecipado “Quitação”: É possível quitar ou amortizar antecipadamente a dívida em qualquer momento a partir da contratação. Liquidação pode ser efetuada no SAC da PH Tech Exemplo do custo total da operação: Saldo FGTS utilizado para operação: R$ 8.000,00 - Valor Liberado proveniente do saldo: R$ 4.687,72
  </p>
</div>
  </section>
);

export default Footer;
