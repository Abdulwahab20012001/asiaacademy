import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaTrophy,
  FaChalkboardTeacher,
  FaBook,
  FaLaptop,
  FaGraduationCap,
  FaPercentage,
} from "react-icons/fa";
import { FaChartLine, FaUserTie, FaRunning } from "react-icons/fa";
import { FaStar, FaAtom, FaHandsHelping, FaUserFriends } from "react-icons/fa";

const Home = () => {
  const features = [
    {
      icon: <FaTrophy className="feature-icon" />,
      title: "Well Ranked Institution",
      description: "Top-ranked academy in Asia",
    },
    {
      icon: <FaGraduationCap className="feature-icon" />,
      title: "Student Development",
      description: "Comprehensive counseling & leadership programs",
    },
    {
      icon: <FaBook className="feature-icon" />,
      title: "Quality Education",
      description: "30+ academic programs",
    },
    {
      icon: <FaLaptop className="feature-icon" />,
      title: "Asia Academy LMS",
      description: "Advanced online learning platform",
    },
    {
      icon: <FaChalkboardTeacher className="feature-icon" />,
      title: "Experienced Faculty",
      description: "Highly qualified educators",
    },
    {
      icon: <FaPercentage className="feature-icon" />,
      title: "Scholarships",
      description: "Fee concessions & merit prizes",
    },
  ];

  return (
    <>
      <>
        <section className="hero-banner">
          <div className="about-header">
            <h1>Welcome to Asia Academy</h1>
            <p>Excellence in Education Since 2016</p>
          </div>
          <div className="info">
            <h2 className="section-title">
              Asia Academy: Nurturing Excellence Since 2016
            </h2>
            <p>
  Established in 2016, Asia Academy has quickly emerged 
  as a dynamic learning hub that combines  academic rigor 
  with personalized attention. Our vibrant educational environment 
  fosters both intellectual growth and character development, 
  ensuring students make consistent progress in their studies. Through our refined 
   teaching methodologies, we address the individual learning needs 
  of each student, equipping them with the skills and knowledge essential 
  for future success in higher education and professional life. In just a few short years, 
   Asia Academy has earned recognition as a center of academic excellence, 
  where students cultivate not only subject mastery but also 
  leadership qualities and ethical values. As a rapidly 
  growing institution, we proudly welcome students each year from top schools across the 
  region, a testament to our reputation for quality education. 
  At our academy, we offer classes from <strong> Primary to Matric, as well as F.A, ICS, F.Sc, 
  and I.Com</strong>, ensuring a complete learning pathway for students at every level. 
  We invite you to join our thriving academic community and become part of our  
   inspiring success story.
</p>
          </div>

          <div className="objectives-container">
            <div className="image-section">
              <img src="Home.jpg" alt="Asia Academy" className="main-image" />
            </div>

            <div className="text-section">
              <h2 className="section-title">OUR OBJECTIVES</h2>

              <p className="intro-text">
                No education system can flourish in isolation. Asia Academy
                remains deeply rooted in cultural values while embracing
                progressive teaching methodologies.
              </p>

              <div className="objectives-list">
                <div className="objective-item">
                  <FaStar className="objective-icon" />
                  <span>
                    Islamic values as foundation of our education system
                  </span>
                </div>

                <div className="objective-item">
                  <FaAtom className="objective-icon" />
                  <span>Modern scientific education with IT focus</span>
                </div>

                <div className="objective-item">
                  <FaHandsHelping className="objective-icon" />
                  <span>Develop confident, sociable individuals</span>
                </div>

                <div className="objective-item">
                  <FaUserFriends className="objective-icon" />
                  <span>Foster self-respect and mutual respect</span>
                </div>
              </div>
            </div>
          </div>

          <div className="announcement-container">
            <h3 className="announcement-heading">
              Now Offering Private And Regular Board Admissions
            </h3>

            <div className="announcement-content">
              <p>
                <strong>Did you know?</strong> Our academy sends private and
                regular board admissions!
              </p>

              <p>
                Now send regular and private admissions for Matric, F.Sc , F.A ,Icom
                and Ics from home. We will send your admissions to{" "}
                <strong>Rawalpindi Board</strong> and{" "}
                <strong>Federal Board</strong> with complete guidance and
                convenience. Don't waste time, contact now!
              </p>
              <p>
                <strong>📢 University Admissions Open!</strong> Now secure your admission while
                staying at home. We submit admissions for Punjab University,
                Sargodha University, and Allama Iqbal Open University.
              </p>

              <div className="announcement-note">
                <p>
                  This service is available alongside our regular academic
                  programs.
                </p>
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="motive-section">
          <div className="container">
            <div className="motive-row">
              <div className="motive-content">
                <h2>Our Motive</h2>
                <p>
                  At Asia Academy, we believe education should ignite curiosity,
                  build character, and empower lives. Since 2016, our mission
                  has been simple: to provide learning that lasts beyond
                  classrooms. We focus on nurturing kind, resilient individuals
                  who think critically and act compassionately. Our teachers
                  don’t just deliver lessons—they mentor young minds through
                  personalized attention. We maintain small class sizes to
                  ensure every student receives the guidance they deserve,
                  blending modern teaching methods with timeless values. Here,
                  education means more than exams—it’s about growing confident
                  problem-solvers who contribute meaningfully to their
                  communities. Our greatest reward is seeing students develop
                  not just academic skills, but the wisdom and courage to
                  navigate life’s challenges.
                </p>

                <div className="stats-row">
                  <div className="stat-item">
                    <h3>1500+</h3>
                    <p>Graduates</p>
                  </div>
                  <div className="stat-item">
                    <h3>95%</h3>
                    <p>Placement Rate</p>
                  </div>
                  <div className="stat-item">
                    <h3>10+</h3>
                    <p>National Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <section className="why-asia-academy">
        <div className="container">
          <h2>Why Asia Academy?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon-container">{feature.icon}</div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="stats-section">
        <div className="section-header">
          <h2>Our Institutional Excellence</h2>
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <h3>85+ %</h3>
            <div className="stat-content">
              <FaChartLine className="stat-icon" />
              <p>Exam Pass Percentage</p>
            </div>
          </div>

          <div className="stat-item">
            <h3>100%</h3>
            <div className="stat-content">
              <FaUserTie className="stat-icon" />
              <p>Experienced Faculty</p>
            </div>
          </div>

          <div className="stat-item">
            <h3>100%</h3>
            <div className="stat-content">
              <FaRunning className="stat-icon" />
              <p>Extra Curricular Activities</p>
            </div>
          </div>

          <div className="stat-item">
            <h3>100%</h3>
            <div className="stat-content">
              <FaLaptop className="stat-icon" />
              <p>Technology Integration</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
