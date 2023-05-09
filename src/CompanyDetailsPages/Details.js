import React from 'react';
import "./Details.css";
const Details = () => {
    return (
  
            <div className='Total-Details'>
            <div className="row">
                <div className="col-md-6">
                    <img src={"Img1/details-img.jpg"} alt="" />
                </div>
                <div className="col-md-6">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde culpa minima ab suscipit possimus quia sint vero, officia id dicta provident laudantium amet perferendis quae reprehenderit cum molestiae, eaque ea?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde culpa minima ab suscipit possimus quia sint vero, officia id dicta provident laudantium amet perferendis quae reprehenderit cum molestiae, eaque ea?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde culpa minima ab suscipit possimus quia sint vero, officia id dicta provident laudantium amet perferendis quae reprehenderit cum molestiae, eaque ea?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde culpa minima ab suscipit possimus quia sint vero, officia id dicta provident laudantium amet perferendis quae reprehenderit cum molestiae, eaque ea?</p>
                </div>
            </div>
            
           <div className="Details-btn-total">
           <div className="row">
                <div className="col-md-3">
                <button className='DETAILS-BTN'>VIDIO</button>
                <img className='Details-img-2' src={"Img1/photo-1 1491396122992-23bcbe680fe6.jfif"} alt="" />
                </div>
                <div className="col-md-3">
                <button className='Gnn-blog-btn'>GNN BLOG</button>
                <img className='Details-img-2' src={"Img1/2 nlBkTF.jpg"} alt="" />
                </div>
                <div className="col-md-3">
                <button className='LIVE-BRODCST'>LIVE BRODCST</button>
                <img className='Details-img-2' src={"Img1/3 photo-1528825539566-2bcb5882445c.jfif"} alt="" />
                </div>
                <div className="col-md-3">
                <button className='BIBLE-LESSON'>BIBLE LESSON</button>
                <img className='Details-img-2'  src="Img1/4 wp3340366.jpg" alt="" />
                </div>
            </div>
           </div>
        </div>
   
    );
};

export default Details;