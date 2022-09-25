import React from 'react';
import './AboutSection.css';
import Cards from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import about from '../about';
import Heading from './Heading';
import Break from './Break';

function AboutSection(props) {
  return (
    <div className='about-container'>
      <Heading name="ABOUT US"/>
      <Break />
      <img className="about-image" src="img1.jpg" alt="abouti"/>
      <div className='about-bg'>
      <p className='about-text'>We endeavor to build homes which makes its residence happy and proud of their address. 
      Residents are at heart of everything we do, we build homes to live in, not houses to stay in.</p>
      <Break />

      <Cards imageL={about[0].imgURL} detailL={about[0].detail} imageR={about[1].imgURL} detailR={about[1].detail} />
      <Cards imageL={about[2].imgURL} detailL={about[2].detail} imageR={about[3].imgURL} detailR={about[3].detail}/>
      
      <div style={{background: "rgba(0, 0, 0, 0.8)", height: "153.33px", width: "100%"}}></div>
      <p className='about-sub'>Established in 1992, Hetali group is a leading real estate developer of residential spaces across
      Mumbai and have earned an unmatched reputation among it's very loyal customers. The company's customer centric values, 
      project management, proficiency and technical expertise are amplified with over 6.5 laks square ft built an d1 lak ft 
      underway leading to more families. <br/><br/>
      The Hetali Group Promises a lifestyle second to none. In a life pan of over four decades, the groups have proved to be 
      one of the most reputed real estate builders in the western suburbs areas of Mumbai with residence in prime locations 
      such as Andelhi, Goregaon, vili parle and juhu. <br/><br/>
      Sprearheaded by mr. jayesh pandya, the company's central ideology is to provide homes customized to the customer's requirements
       and home's that are superior in nature keeping in mind the needs of the modern home user.</p>
      </div>
      
      <div className='vision'>
      <div className='vision-outer'>
      <h1 className='vision-header'>VISION</h1>
      <p className='vision-body'>We aim to ensure top-class service to our stakeholders & diversify our business to other service-oriented
       sectors with the ultimate goal of achieving customer satisfaction & end-user interaction. </p>
      </div>
      </div>
       <div>
       <h1 className='mission-header'>MISSION</h1>
       <Break/>
      
       <div className="row marg-row" >
  <div className="col-sm-6">
      <img src="mission.png" className="card-img-top" alt="mission" style={{height:"75%", width:"100%"}}/>
  </div>
  <div className="col-sm-6">
  <div className="card-per">
  <p><strong>Personalised</strong></p>
    Our core idealogy is to provide personalised homes to meet the very specific needs of residents.
</div>
<div className="card-res">
Committed
</div>
<div className="card-res">
Quality & Service Oriented
</div>
<div className="card-res">
Timely </div>
  </div> 
</div>
      </div>
       <div className='corporate'>
       <Heading name="CORPORATE SOCIAL RESPONSIBILITY" />
       <Break/>
      <div className="row marg-row" >
  <div class="col-sm-6">
  <div class="card-per" style={{height:"200px"}}>
  <p><strong>Education for the under-privileged</strong></p>
  We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by 
  providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages 
  in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality 
  services to the academically bright students from the weaker monetary sections of the society.
</div>
<div className="card-res">
Support for Rural Farmers
</div>
<div className="card-res">
Spiritual
</div>
  </div> 
  <div className="col-sm-6">
    
      
  <img src="corporate.png" className="card-img-top" alt="mission" style={{height:"55%", width:"100%"}}/>
      
  </div>
  </div>
       </div>
  <div className='founder'>
    <div className='founder-outer'>
      <Heading name="FOUNDER'S MESSAGE" />
      <div className='founder-body'>
      <img className='founder-pic' src='5.png' alt='founder' />

      </div>
      <Break/>
      <h2 className='founder-name'>Mr. Jayesh H. Pandya</h2>
      <p className='foundert1'>When a customer buys a home, he's giving a major chunk of his life savings to do so. It is imperative to give
      him exactly what he looks for in his home.</p>

      <p className='foundert2'>We bring to our clients much wanted human values, integrity, trust and an assurance of responsibility all coupled with 
      our expertise in construction, engineering & management. Our biggest assets have always been our smallbut highly trained 
      team of professional managers and engineers who are backed by a very able team ofadministrators. We have a clear vision about 
      building on our strengths and our achievements while holding dear tous our basic principles
     </p>
      
    </div>
    <Break/>
  </div>
  <div className='group'>
    <h1 className='group-header'>GROUP COMPANIES</h1>
    <Break/>
      <div className='comp'>
      <div >
      <img className='agriculture' src='7.png' alt='agric'></img>
      <p className='text'>Agriculture</p>
      </div>
      <div >
      <img className='fuel' src='8.png' alt='agric'></img>
      <p className='text'>Fuel</p>
      </div>
      <div >
      <img className='foods' src='6.png' alt='agric'></img>
      <p className='text'>Foods</p>
      </div>
      </div>
</div>

      </div>
           
      
  );
}

export default AboutSection;
