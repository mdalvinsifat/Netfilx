import React from 'react';
import image from '../../Img/tv-show.png'
import image1 from '../../Img/section1.jpg'
import image2 from '../../Img/section2.png'
const Section = () => {
    return (
        <div>

            <div className="line-heading">
            <br/>
            </div>
            
            <div className="container">
                <div className="row mt-5 p-5">
                    <div className="col-md-5 ms-2  mt-5">
                        <h1 className='text-light'>
                        Enjoy on your TV
                        </h1>
                        <h4 className='text-light '>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
</h4>
                    </div>
<div className="col-md-6 ms-5">
    <img src={image} alt="" srcset="" className='img-fluid '/>
</div>
                </div>
            </div>


            <div className="line-heading">
            <br/>
            </div>

            <div className="container">
                <div className="row mt-5 p-5">
                    <div className="col-md-5 ms-2 mb-4 mt-5">
          <img src={image1} alt="" srcset="" className='img-fluid '/>
                    </div>
                    <div className="col-md-5 ms-2  mt-5 text-light">
    <h1 className='mt-5'>
    Download your shows to watch offline
    </h1>

    <h4>
    Save your favorites easily and always have something to watch.
    </h4>
</div>
                </div>
            </div>

            <div className="line-heading">
            <br/>
            </div>

            <div className="container">
                <div className="row mt-5 p-5">
                    <div className="col-md-5 ms-2  mt-5">
                        <h1 className='text-light'>
                        Watch everywhere
                        </h1>
                        <h4 className='text-light '>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV
</h4>
                    </div>

                </div>
            </div>


            <div className="line-heading">
            <br/>
            </div>


            <div className="container">
                <div className="row mt-5 p-5">
                    <div className="col-md-5 ms-2 mb-4 mt-5">
          <img src={image2} alt="" srcset="" className='img-fluid '/>
                    </div>
                    <div className="col-md-5 ms-2  mt-5 text-light">
    <h1 className='mt-5'>
    Create profiles for kids
    </h1>

    <h4>
   
    Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
    </h4>
</div>
                </div>
            </div>



            <div className="line-heading">
            <br/>
            </div>


        </div>
    );
};

export default Section;