import React from 'react';
import './Singledeveloper.css'

//component to generate every single developer card
const Singledeveloper = ({ developer, handleHire }) => {

  return (
    <div className="singledeveloper">
      <div className="col">
        <div className="card h-100 py-3 text-secondary devcard">
          <img src className="card-img-top devimg" alt="developer" />

          <div className="card-body text-center">
            <h6>name:  <span className="fw-bold">{developer.name}</span></h6>
            <h6>gender:  <span className="fw-bold">{developer.gender}</span></h6>
            <h6>email:  <span className="fw-bold">{developer.email}</span></h6>
            <h6>phone:  <span className="fw-bold">{developer.phone}</span></h6>
            <h6>salary:  <span className="fw-bold">${developer.salary}</span></h6>
            <h6>country:  <span className="fw-bold">{developer.country}</span></h6>

            <div className="sociallinks">
              <a href target="_blank" rel="noreferrer" className="me-4"><i className="fab fa-github text-secondary"></i></a>
              <a href target="_blank" rel="noreferrer" className="me-4"><i className="fab fa-twitter text-secondary"></i></a>
              <a href target="_blank" rel="noreferrer"><i className="fab fa-linkedin text-secondary"></i></a>
            </div>

            <button onClick={() => handleHire && handleHire(developer)} className="btn btn-success text- px-3 px-lg-4 fw-bold"><i className="fas fa-code me-1"></i>Hire Developer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singledeveloper;