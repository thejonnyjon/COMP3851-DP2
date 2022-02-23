import React from 'react'
import headerImage from "../Image/UON background.jpg"
import navImage1 from "../Image/View Courses.png"
import navImage2 from "../Image/Create Plan.png"
import navImage3 from "../Image/Saved Courses.png"
import Header from './Partials/Header'
import "animate.css"

function Home() {
    return (
        <>
        <Header />
        <div style={{ backgroundImage: `url('${headerImage}')`, backgroundSize: 'cover', height: '50vh' }}>
            <div class="animate__animated animate__zoomIn" style={{ fontWeight: 'bolder', fontSize: '230%', color: 'white', position: 'absolute', top: '18%', left: '15%' }}>
                Hello and Welcome to the University of Newcastle, Australia!
            </div>
            <div style={{ fontSize: 10, color: 'white', position: 'absolute', top: '48vh', right: 0 }}>
                Image from: <a href="https://www.newcastle.edu.au/study/international">UON Australia</a>
            </div>
        </div>
        <a href="../viewCourse"><img src={navImage1} alt='View courses' width='33%' /></a>
        <a href="../addcourse"><img src={navImage2} alt='Add course plan' width='33%' /></a>
        <a href="../coursefeed"><img src={navImage3} alt='View Saved Plan' width='33%' /></a>
            </>
    );
  }

export default Home