import React from 'react';

export default function Projects() {
  return (
    <section className='container'>
      <h1 className='all-header'>Projects</h1>
      <div className="row">
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={`${process.env.PUBLIC_URL}/images/Bracket-Bois.JPG`} className="card-img-top" alt="Bracket Bois by Chris Tierney, Chris Leavengood, and Clayton Weber" />    
                    <div className="card-body">
                        <h5 className="card-title">Bracket Bois</h5>
                        <p className="card-text">Create, edit and delete tournaments through our database with this application.</p>
                        <a href='https://bracket-bois.herokuapp.com/' className="btn btn-primary">Visit</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-12">
                <div className="card mb-3">
                <img src={ `${process.env.PUBLIC_URL}/images/stockdemic.JPG` } className="card-img-top" alt="Stockdemic Project by Chris Tierney" />    
                    <div className="card-body">
                        <h5 className="card-title">Stockdemic</h5>
                        <p className="card-text">Our team created this application so that the user can correlate data between daily COVID cases and stock prices.</p>
                        <a href='https://cleave13.github.io/stockdemic-project-1/' className="btn btn-primary">Visit</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card mb-3">
                <img src={ `${process.env.PUBLIC_URL}/images/day_planner.JPG` } className="card-img-top" alt="Day Planner by Chris Tierney" />
                  <div className="card-body">
                    <h5 className="card-title">Day Planner</h5>
                    <p className="card-text">Plan your day accordingly with this application I built.</p>
                    <a href="https://christierney3.github.io/My_Planner/" className="btn btn-primary">Visit</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card mb-3">
                <img src= { `${process.env.PUBLIC_URL}/images/pw_gen.JPG` } className="card-img-top" alt="Password Generator by Chris Tierney" />
                  <div className="card-body">
                    <h5 className="card-title">Password Generator</h5>
                    <p className="card-text">Never worry about an insufficient password again with this tool.</p>
                    <a href="https://christierney3.github.io/Password_Generator/" className="btn btn-primary">Visit</a>
                  </div>
                </div>
              </div>
        </div>
    </section>
  );
}
