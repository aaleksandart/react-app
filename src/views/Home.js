import React from 'react'
import logo from '../components/images/bike2.jpg'
import logo2 from '../components/images/bike4.jpg'

const Home = () => {
    return (
        <div className="home-page">
        <div className="home-content container d-flex align-items-center justify-content-center" id="home-content">
            <img className="rounded shadow home-logo" src={logo} alt="home-logo" />
            <div className="ms-5">
            <strong>Welcome to </strong>
            <h1>BikeLiving</h1>
            <p className="text-muted mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Similique optio explicabo iusto quos excepturi perspiciatis est hic reiciendis labore dolor! 
                Adipisci quod corrupti hic eum laborum repudiandae cumque est inventore?</p>
            </div>
        </div>
        <div className="home-content container d-flex align-items-center justify-content-center" id="home-content-under">
            <div className="me-5">
                <strong>Our vision here @</strong>
                <h1>BikeLiving</h1>
                <p className="text-muted mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Similique optio explicabo iusto quos excepturi perspiciatis est hic reiciendis labore dolor! 
                Adipisci quod corrupti hic eum laborum repudiandae cumque est inventore?</p>
            </div>
            <img className="rounded shadow home-logo" src={logo2} alt="home-logo2" />
        </div>
        </div>
    )
}

export default Home
