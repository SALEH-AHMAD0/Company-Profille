import React from 'react';
import "./News.css";
import Carousel from 'react-bootstrap/Carousel';
const News = () => {
    return (
      
         <div>
            <div className="head-line">
             
                {/* <Carousel variant="dark">
      <Carousel.Item>
        <img id='slider'
          className="d-block w-50"
          src="Img1/2 nlBkTF.jpg"
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img id='slider'
          className="d-block w-50"
          src="Img1/2 nlBkTF.jpg"
          alt="Second slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img id='slider'
          className="d-block w-50"
          src="Img1/2 nlBkTF.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel> */}


            </div>
            <div className="news-time">
            <h1>24</h1>
            <h1>AUG</h1>
            </div>
            <button className='news-btn-year'>2023</button>
           <div className="news-details">
         <div className="card">
         <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odio.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus, reprehenderit incidunt quis molestias, Mollitia.</p>
            <p>Saleh Ahmad</p>   
         </div>
           </div>

       <div className="second-news">
       <div className="news-time">
            <h1>24</h1>
            <h1>AUG</h1>
            </div>
            <button className='news-btn-year'>2023</button>
           <div className="news-details">
         <div className="card">
         <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odio.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus, reprehenderit incidunt quis molestias, Mollitia.</p>
            <p>Saleh Ahmad</p>   
         </div>
           </div>
       </div>

       <div className="third-news">
       <div className="news-time">
            <h1>24</h1>
            <h1>AUG</h1>
            </div>
            <button className='news-btn-year'>2023</button>
           <div className="news-details">
         <div className="card">
         <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, odio.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus, reprehenderit incidunt quis molestias, Mollitia.</p>
            <p>Saleh Ahmad</p>   
         </div>
           </div>
       </div>


        </div>
      
    );
};

export default News;