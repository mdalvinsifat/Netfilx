import React from 'react';
import img from '../../Img/card-design.jpg'
import img1 from '../../Img/card-design-1.jpg'
import img2 from '../../Img/card-design-2.jpg'
import img3 from '../../Img/card-design-3.jpg'
import img4 from '../../Img/card-design-4.jpg'
import img5 from '../../Img/card-design-5.jpg'
import img6 from '../../Img/card-design-6.jpg'

const CardBanner = () => {
    return (
        <div className='flex-wrap'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={img2} alt="" srcset="" className='img-fluid mt-5' />
                    </div>

                    <div className="col-md-4 ">
                        <img src={img1} alt="" srcset="" className='mt-5 ms-5' />
                    </div>


                    <div className="col-md-4">
                        <img src={img3} alt="" srcset="" className=' mt-5 ms-5' />
                    </div>

                </div>


              
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={img4} alt="" srcset="" className='img-fluid mt-5' />
                    </div>

                    <div className="col-md-4 ">
                        <img src={img5} alt="" srcset="" className='mt-5 ms-5' />
                    </div>


                    <div className="col-md-4">
                        <img src={img6} alt="" srcset="" className=' mt-5 ms-5' />
                    </div>

                </div>


              
            </div>
        </div>
    );
};

export default CardBanner;