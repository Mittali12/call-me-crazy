import React from "react";
import Slider from "react-slick";

const DeliveryPage = () => {
    var settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
    return (
        <div className="w-full flex justify-center  bg-[#ffba8176]">
            <div className="w-[95%] slider-container">
                <Slider {...settings}>
                    <div className="">
                        <img src="images/foodplate1.png" width={250} />

                    </div>
                    <div>
                        <img src="images/foodplate2.png" width={250} />

                    </div>
                    <div>
                        <img src="images/foodplate6.png" width={250} />

                    </div>
                    <div>
                        <img src="images/foodplate1.png" width={250} />

                    </div>
                    <div>
                        <img src="images/foodplate2.png" width={250} />

                    </div>
                    <div>
                        <img src="images/foodplate6.png" width={250} />

                    </div>
                </Slider>
            </div>
        </div>
    );
}
export default DeliveryPage