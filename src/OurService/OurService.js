import React from 'react';
import "./OurService.css";
const OurService = () => {
    return (
    <div>     
        <div className="service-headLine">
        <h5>RECENT <span style={{color:"red"}}>STRMONS </span> <span className='our-service'>OUR <span style={{color:"red"}}>SERVICE</span></span></h5>
        </div>

        <div className="row">
            <div className="col-md-1">
             <div className="time">
             <h2>23</h2>
             <h2>JAN</h2>
             </div>
            </div>
            <div className="col-md-3">
                <img className='pray-pic' src={"Img1/pray stockphoto-180833907-612x612.jpg"} alt="" />
            </div>
            <div className="col-md-4">
               <div className="total-card">
               <div className="card">
                   <h4   className='Service-intro-head'>Donce tempus risue dignissim</h4>
                </div>
                <div className="card">
                    <div className="card-details">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque laboriosam vero corporis ex earum, quos aut reprehenderit nostrum soluta adipisci ea. Quam itaque veniam atque perferendis explicabo obcaecati ipsum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque laboriosam vero corporis ex earum, quos aut reprehenderit nostrum soluta adipisci ea. Quam itaque veniam atque perferendis explicabo obcaecati ipsum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cumque laboriosam vero corporis ex earum, quos aut reprehenderit nostrum soluta adipisci ea. Quam itaque veniam atque perferendis explicabo obcaecati ipsum.
                    </div>

                    <a className='read-more-btn' href=""> <span style={{color:"red"}}>read more</span>  </a>
                </div>
               </div>
            </div>
            <div className="col-md-4">
                <h2 className='service-head-4'>Vestibulum pellen tesque</h2>
                <div className="card">
                    <img className='pray-img-service' src="Img1/pray stockphoto-180833907-612x612.jpg" alt="" />
                    <div className="service-releted">
                    <h5>Political acdiam pharectra mattis</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates minima deleniti rerum tempora non debitis unde facere in necessitatibus reiciendis hic doloribus voluptatibus adipisci, sunt dolorem ad? Similique, animi libero?</p>
                    </div>
                </div>
               
                   <div className="card-foter">
                   <h3>Vestibulum pellen</h3>
                    <h3>tesque</h3>
                   </div>
               
            </div>
        </div>
        <div className="row">
            <div className="col-md-1">
            <div className="time-second">
             <h2>17</h2>
             <h2>FEB</h2>
             </div>
            </div>
            <div className="col-md-3">
                 <img className='prayer2' src={"Img1/2811322.jpg"} alt="" />
                </div>
                <div className="col-md-5">
                <div className='second-head'>
                <div className="card">
                    <h4 >Maturies et metus commodo</h4>
                    <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit maxime itaque perferendis, consequatur molestias fugiat eligendi ratione tempora eveniet adipisci vero aperiam illo ad atque unde quibusdam corrupti libero?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit maxime itaque perferendis, consequatur molestias fugiat eligendi ratione tempora eveniet adipisci vero aperiam illo ad atque unde quibusdam corrupti libero?</p>
                    <a href=""><span style={{color:"red"}}>Read more..</span></a>
                </div>
                </div>
                </div>
                
                </div>
                <div className="col-md-4">
                
                </div>
        </div>
        </div>
    );
};

export default OurService;