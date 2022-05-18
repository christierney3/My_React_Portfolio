import React from 'react';

export default function About() {
  return (
    <section class="container">
      <h1 className='all-header'>About Me</h1>
      <div className='about-me-p'>
      <p>
        My name is Chris Tierney and I am an aspiring web developer with a background in professional athletics and economics.
      </p>
      <p>
        As a child and young adult I spent my time and energy on competitively snowboarding.
        The drive and competitor's mentality I learned while in the sport has helped me in many other aspects of my life when I decided to leave it.
      </p>
      <p>
        Although my work in web development is not as polished as it will be in ~1 month, I am confident my work would be a valued addition to any web developing company.
      </p>
      </div>
      <div className='col-sm-6 about-photo'>
        <div className='card mb-3'>
        <img src={`${process.env.PUBLIC_URL}/images/dewtour.jpg`} className="card-img-top" alt="Killington Dew Tour" />
        </div>
      </div>
      <div className='col-sm-6 about-photo'>
        <div className='card mb-3'>
        <img src={`${process.env.PUBLIC_URL}/images/european-open.jpg`} className="card-img-top" alt="Burton European Open" />
        </div>
      </div>
    </section>
  );
}
