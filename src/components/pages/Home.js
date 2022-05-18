import React from 'react';

export default function Home() {
  return (
    <section className='container'>
      <div className="container intro-pic">
      <img src={ `${process.env.PUBLIC_URL}/images/my-photo.jpg` } alt="My dog Ray and I" />
        <div className="container name">
          <h1>Hello,</h1>
          <h1 className="i">I</h1>
          <h1 className="am">am</h1>
          <h1 className="chris">Chris</h1>
          <h1 className="tierney">Tierney.</h1>
        </div>

    </div>
  </section>
    
  );
}
