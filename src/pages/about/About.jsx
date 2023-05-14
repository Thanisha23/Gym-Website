import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        dolor ex nostrum blanditiis ipsum dolores repudiandae ab vel
        consequuntur laboriosam.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ut hic dolorum tempora quaerat itaque blanditiis. Voluptates
              dolorum voluptatibus aspernatur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus cum suscipit officiis iusto atque ad dolores,
              veritatis culpa illo quibusdam?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              obcaecati sequi repellat, illum aut sunt?
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ut hic dolorum tempora quaerat itaque blanditiis. Voluptates
              dolorum voluptatibus aspernatur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus cum suscipit officiis iusto atque ad dolores,
              veritatis culpa illo quibusdam?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              obcaecati sequi repellat, illum aut sunt?
            </p>
          </div>

          <div className="about__section-image">
            <img src={VisionImage} alt="Our vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission Image" />
          </div>

          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ut hic dolorum tempora quaerat itaque blanditiis. Voluptates
              dolorum voluptatibus aspernatur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus cum suscipit officiis iusto atque ad dolores,
              veritatis culpa illo quibusdam?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              obcaecati sequi repellat, illum aut sunt?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
