import React from 'react';
import banner1 from '../../Img/Banner1.jpg'
import banner2 from '../../Img/Banner2.jpg'
import banner3 from '../../Img/banner3.png'
const Carsoule = () => {
    return (
        <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100 img-fluid" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    );
};

export default Carsoule;





