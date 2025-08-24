import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";


const Faculty = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://opensheet.elk.sh/2PACX-1vRVIEJpKe70J1GmSkk8h5OFe8coNgtukWNU8Xr6-phhmCEub8ce7f6020KLNigiK7iar8n-jXmO0qGF/SHEET1")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="about-header">
        <h1>Faculty Members</h1>
      </div>
      <div className="faculty">
        <p>
          At Asia Academy, we believe education should ignite curiosity, build
          character, and empower lives. Since 2016, our mission has been simple:
          to provide learning that lasts beyond classrooms. We focus on
          nurturing kind, resilient individuals who think critically and act
          compassionately. Our teachers don’t just deliver lessons—they mentor
          young minds through personalized attention. We maintain small class
          sizes to ensure every student receives the guidance they deserve,
          blending modern teaching methods with timeless values. Here, education
          means more than exams—it’s about growing confident problem-solvers who
          contribute meaningfully to their communities. Our greatest reward is
          seeing students develop not just academic skills, but the wisdom and
          courage to navigate life’s challenges.
        </p>
      </div>
     <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-4 col-sm-6 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src="sir.jpeg" alt="Teacher Zaheer Akhtar" />
        <div className="card-body">
          <h3 className="card-title">Zaheer Akhtar Principal</h3>
          <p className="card-text">
            M.A ,M.Ed ,LLB. Educationist with 33 years of experience.
            Principal MC boys high school B block setalite town Rawaipindi.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src="raziaplc.png" className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title">Madam Razia Sultana</h3>
          <p className="card-text">
           Educationist,
           Program Coordinator
           Chairperson Ehsas foundation RWP
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-sm-6 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src="hafaz.jpg" className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title">Hafiz Muhammad Sheheryar (VP)</h3>
          <p className="card-text">
            M.phil, MBA (finance) Quaid e Azam university HOD at Askaria
            college. Lecturer at future learn college having 6 years of
            teaching experience.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="HAFAZBHAI.jpg"
          className="card-img-top"
          alt="Faheem Abbas"
        />
        <div className="card-body">
          <h3 className="card-title">Faheem Abbas</h3>
          <p className="card-text">
            BS physics international islamic university islamabad HOD
            physics and maths with 05 years of teaching experience
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Faculty;





