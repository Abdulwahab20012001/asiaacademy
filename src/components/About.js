import React from "react";
import "./faculty.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Asia Academy</h2>
            <p>
              Asia Academy is committed to imparting quality education to its
              students on modern and scientific lines, while maintaining an
              environment of mutual respect and dignity. Our mission is to groom
              students into capable human beings, well-equipped to handle future
              challenges with confidence.
            </p>
            <p>
              We believe no education system can flourish in isolation. Asia
              Academy remains deeply rooted in cultural values while embracing
              progressive teaching methodologies, creating a balanced approach
              to holistic development.
            </p>
          </div>

          <div className="about-image">
            <img
              src="img.jpg"
              alt="Asia Academy Campus"
              className="academy-img"
            />
          </div>
        </div>
      </div>

      <div className="about-text">
        <h2>Objectives</h2>
        <p>
          No education system can flourish in isolation—it must draw strength
          from its cultural, religious, and social roots. We are deeply
          committed to preserving and promoting our religious values, national
          ideology, customs, moral traditions, and rich cultural heritage. The
          institution operates with a clear mission: to shape young minds into
          responsible, ethical citizens and future leaders who contribute
          meaningfully to society. By blending modern educational practices with
          timeless values, we ensure students are both globally competent and
          locally grounded.
        </p>

        <h2>Our Aim</h2>
        <p>
          We strive to deliver high-quality education through modern,
          scientific, and innovative approaches within a supportive and
          respectful environment. Our focus extends beyond academic excellence
          to nurturing confident, compassionate, and critical-thinking
          individuals. We aim to equip students with the skills, knowledge, and
          character needed to succeed in a rapidly changing world while
          inspiring them to become proactive, positive contributors to their
          communities.
        </p>

        <h2>Methods and Methodology</h2>
        <p className="description">
          We foster a dynamic and engaging learning experience that encourages
          curiosity, participation, and hands-on exploration. Our methodology
          integrates interactive classroom instruction with practical outdoor
          activities, including experiments, projects, field visits, sports, and
          artistic expression. This balanced approach ensures that learning is
          not only effective and enjoyable but also deeply relevant, helping
          students develop real-world skills and a lasting passion for
          knowledge.
        </p>

        <h2>Affiliation and Medium</h2>
        <p className="description">
          Asia Academy is affiliated with the Federal Board of Intermediate and
          Secondary Education Islamabad. Our institution follows an English
          Medium curriculum to ensure students communicate with fluency and
          confidence.
        </p>
      </div>
    </div>
  );
};

export default About;
