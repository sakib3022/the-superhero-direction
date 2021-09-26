import React from 'react';

//navigatin bar
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand text-secondary fw-bolder ms-5" href="https://leechcoder-babulakterfsd.netlify.app"><i className="fas fa-laptop-code text-success"></i> LeechCoder</a>
              <button className="navbar-toggler ms-auto btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-5 ms-lg-auto me-md-5 mb-2 mb-lg-0 fw-bold text-secondary">
                <li className="nav-item">
                    <a className="nav-link" href="/devlist">Devs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/gallary">Gallary</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
               </ul>
              </div>
             </nav>
             <div className="container">
                  <div className="row">
                      <div className="col-12 col-md-10 mx-auto bg-muted text-secondary my-2 text-center ">
                         <h1>LeechCoder: Hire world class Developers</h1>
                         <h5>We are a stunning team to boostup your online business</h5>
                         <h3>Total Budget: $100 Billion</h3>
                      </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;