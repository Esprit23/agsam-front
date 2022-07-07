import React from 'react'
import "./featuredInfo.css"

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      
      
      <div className="featuredItem">
      <span className="featuredTitle">Article</span>
        <div className="featuredContainer">
            <span className="featuredMoneyContainer">
                10
            </span>
        </div>
            <span className="featuredSub">Lorem ipsum dolor sit amet consectetur adip</span>
      </div>
      <div className="featuredItem">
    <span className="featuredTitle">Type Article</span>
        <div className="featuredContainer">
            <span className="featuredContainer">
                25
            </span>
        </div>
            <span className="featuredSub">Lorem ipsum dolor sit amet consectetur adip</span>
      </div>
      <div className="featuredItem">
    <span className="featuredTitle">Project</span>
        <div className="featuredContainer">
            <span className="featuredMoneyContainer">
                20
            </span>
        </div>
            <span className="featuredSub">Lorem ipsum dolor sit amet consectetur adip</span>
      </div>
    </div>
  )
}
