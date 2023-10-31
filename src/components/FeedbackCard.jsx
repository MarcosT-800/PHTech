import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img, content2 }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src='./teste4.png' alt="double_quotes" className="w-[60.6px] h-[auto] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-5">
      {content}
    </p>

    <div className="flex flex-row">
       <img src={img} alt={name} className="w-[40px] h-[40px] rounded-full" />
        <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
     {/*    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p> */}
      </div>
    </div>
  </div>
);


export default FeedbackCard;
