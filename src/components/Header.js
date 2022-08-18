import React from 'react'
import img from './img.jpeg'
import "./style.css";
import NewsItem from './NewsItem'

const Header = () => {
  return (
    <div>
        <h1>cwevs</h1>
        <p>chqb</p>
      <div className='text-center'>

      <h1>Trending News</h1>
      <div className='container justifyContent center'>

      <div className="my-3">
        <div className="card" style={{width: "24rem", margin:'3px', height: '27em'}}>
              <img src={"https:images.moneycontrol.com/static-mcnews/2017/03/IPO_initial_public_offerings_IPO_1280x720-770x433.jpg"} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Data can  be put here...<span className="badge bg-secondary">harsh</span></h5>
                <p className="card-text">...</p>
                <p className="card-text"><small className="text-muted">By harsh</small></p>
                <a rel ="no referrer" href={{}} target="_blank" className="btn btn-sm btn-danger mx-0 my-0" style={{marginbotom:'4px',marginleft:'9px'}}>Show more</a>
              </div>
            </div>
      </div>
      </div>

      </div>
    {/* <img src={img} className="harsh" ></img> */}

    </div>
  )
}

export default Header
