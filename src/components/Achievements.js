import React from "react";
import "./Achieve.css";
import { FaChartLine, FaUserTie, FaRunning, FaLaptop } from "react-icons/fa";
import {
  FaGraduationCap,
  FaUserGraduate,
  FaTrophy,
  FaSchool,
  FaHandsHelping,
} from "react-icons/fa";

const achievements = [
  {
    title: "Academic Achievements",
    icon: <FaGraduationCap />,
    items: [
      "70% of students improved their grades by one level within a year",
      "90% of our students successfully cleared board exams",
      "15+ top positions at school/board level in past 3 years",
      "100+ success stories of weak students who passed with good marks",
    ],
    color: "#4e73df",
  },
  {
    title: "Student Development",
    icon: <FaUserGraduate />,
    items: [
      "Weekly test system with detailed progress tracking",
      "Monthly workshops on exam preparation and career guidance",
      "80% of average students gained confidence in public speaking",
      "Marked improvement in discipline and time management",
    ],
    color: "#1cc88a",
  },
  {
    title: "Co-Curricular Achievements",
    icon: <FaTrophy />,
    items: [
      "Annual sports day with 300+ participants",
      "Science exhibition with 50+ innovative projects",
      "25+ awards in inter-school competitions",
      "Annual cultural fest with 100% student participation",
    ],
    color: "#f6c23e",
  },
  {
    title: "Institutional Achievements",
    icon: <FaSchool />,
    items: [
      "Affordable fee structure with premium quality education",
      "98% parent satisfaction rate in annual surveys",
      "100% qualified teaching staff with 5+ years average experience",
      "Consistent top rankings in district performance reports",
    ],
    color: "#e74a3b",
  },
  {
    title: "Social Impact",
    icon: <FaHandsHelping />,
    items: [
      "50+ scholarships awarded to needy students annually",
      "Personalized guidance for college/university admissions",
      "85% of average students achieved first-division results",
      "Special remedial classes for academically weak students",
    ],
    color: "#36b9cc",
  },
];

const Achievements = () => {
  return (
    <>
      <div className="about-header">
        <h1>Our Comprehensive Achievements</h1>
        <p className="section-subtitle">Measuring Success Beyond Academics</p>
      </div>
      <div className="achievements-container">
        <div className="achievements-grid">
          {achievements.map((category, index) => (
            <div
              key={index}
              className="achievement-card"
              style={{ borderTop: `5px solid ${category.color}` }}
            >
              <div className="card-header" style={{ color: category.color }}>
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <ul className="achievement-list">
                {category.items.map((item, i) => (
                  <li key={i}>
                    <span
                      className="bullet"
                      style={{ backgroundColor: category.color }}
                    ></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
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

export default Achievements;
