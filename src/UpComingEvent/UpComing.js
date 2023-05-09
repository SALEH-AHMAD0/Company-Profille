import React from 'react';
import "./UpComing.css";
const UpComing = () => {
    return (
       <div>    
          <h3 className='up-coming'>UP COMING <span style={{color:"red"}}>EVENT</span></h3>
          <div className="row">
            <div className="col-md-4">
                <div className="date-up-coming">
                    <h1>24</h1>
                    <h1>FEB</h1>
                </div>
                <img className='up-coming-preay-pic' src={"Img1/103 Week-of-Prayer-for-Christian-Unity.jpg"} alt="" />
               <div className="up-coming-card">
               <div className="card">
                    <h5>Done femmentum massanumc</h5>
                </div>
               </div>
               <div className="up-coming-indepth-details">
                <div className="card">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ipsam, asperiores earum cumque fugit commodi iste quis vero tenetur, quia natus officiis quaerat sunt veniam eos. Officia ea consectetur eveniet.
                   <p> <a href=""> <span style={{color:"red"}}>Read more..</span></a></p>
                  </p>
                </div>
                <div className="location">
                    <div className="card">
                       <p> 5, station road, california, CA</p>
                    </div>
                </div>
               </div>
            </div>
          </div>
          </div>
    );
};

export default UpComing;