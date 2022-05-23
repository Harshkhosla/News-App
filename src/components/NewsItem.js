import React  from 'react'

const NewsItem = (props)=> {

    let {title,discription,imageUrl1,newsUrl,date,author,sourceName} = props;
    
    return (
      
      <div className="my-3">
        <div className="card" style={{width: "24rem", margin:'3px', height: '27em'}}>
              <img src={!imageUrl1?"https:images.moneycontrol.com/static-mcnews/2017/03/IPO_initial_public_offerings_IPO_1280x720-770x433.jpg":imageUrl1} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}...<span className="badge bg-secondary">{sourceName}</span></h5>
                <p className="card-text">{discription}...</p>
                <p className="card-text"><small className="text-muted">By{!author?"Unknown":author} on {date}</small></p>
                <a rel ="no referrer" href={newsUrl} target="_blank" className="btn btn-sm btn-danger mx-0 my-0" style={{marginbotom:'4px',marginleft:'9px'}}>Show more</a>
              </div>
            </div>
      </div>
      
    )
  }

export default NewsItem
