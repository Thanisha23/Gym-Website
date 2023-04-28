import { FaCrown } from "react-icons/fa";
import SectionalHead from "./SectionalHead";
import { programs } from "../data";
import Card from "../UI/Card";
const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs-container">
        <SectionalHead icon={<FaCrown />} title="Programs" />
      </div>
      <div className="programs__wrapper">
        {programs.map(({ id, icon, title, info, path }) => {
          return (
            <Card className="programs__program" key={id}>
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{info}</small>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
