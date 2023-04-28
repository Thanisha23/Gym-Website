import { FaCrown } from "react-icons/fa";
import SectionalHead from "./SectionalHead";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs-container">
        <SectionalHead icon={<FaCrown />} title="Programs" />
      </div>
    </section>
  );
};

export default Programs;
