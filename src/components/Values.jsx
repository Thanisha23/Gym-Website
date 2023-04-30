import Image from "../images/values.jpg";
import SectionalHead from "./SectionalHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>

        <div className="values__right">
          <SectionalHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod unde
            dignissimos debitis aut optio ipsam?
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values_value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;