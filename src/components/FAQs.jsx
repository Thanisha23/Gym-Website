import SectionalHead from "./SectionalHead";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionalHead icon={FaQuestion} title="FAQs" />
        <div className="faqs__wrapper">{}</div>
      </div>
    </section>
  );
};

export default FAQs;