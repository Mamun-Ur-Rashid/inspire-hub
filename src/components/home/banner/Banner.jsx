
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
            
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide className="h-screen w-full">
                    <div className="relative h-full">
                        <img
                            src="https://i.ibb.co/cTVPFzv/banner1.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <p className="text-3xl font-bold  mb-6">Express your passions, Your way</p>
                            <small className="text-lg mb-4">Create a unique and beautiful blog easily.</small>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                                Create Your Blog
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-screen w-full">
                    <div className="relative h-full">
                        <img
                            src="https://i.ibb.co/crSGxm2/banner7.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <p className="text-3xl font-bold  mb-6">Express your passions, Your way</p>
                            <small className="text-lg mb-4">Create a unique and beautiful blog easily.</small>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                                Create Your Blog
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-screen w-full">
                    <div className="relative h-full">
                        <img
                            src="https://i.ibb.co/tq2rWFt/banner8.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <p className="text-3xl font-bold  mb-6">Express your passions, Your way</p>
                            <small className="text-lg mb-4">Create a unique and beautiful blog easily.</small>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                                Create Your Blog
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-screen w-full">
                    <div className="relative h-full">
                        <img
                            src="https://i.ibb.co/D4JSH0H/banner6.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <p className="text-3xl font-bold  mb-6">Express your passions, Your way</p>
                            <small className="text-lg mb-4">Create a unique and beautiful blog easily.</small>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                                Create Your Blog
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-screen w-full">
                    <div className="relative h-full">
                        <img
                            src="https://i.ibb.co/BPJnbZJ/banner2.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <p className="text-3xl font-bold  mb-6">Express your passions, Your way</p>
                            <small className="text-lg mb-4">Create a unique and beautiful blog easily.</small>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                                Create Your Blog
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-screen w-full">
                    <div className="relative h-full">
                        <img
                            src="https://i.ibb.co/x3Pj9Zr/banner3.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className="text-3xl font-bold  mb-6">Express your passions, Your way</p>
                            <small className="text-lg mb-4">Create a unique and beautiful blog easily.</small>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                                Create Your Blog
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-screen w-full">
                    <div className="relative h-full">
                        <img
                            src="https://i.ibb.co/hdkLVtX/banner4.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className="text-3xl font-bold  mb-6">Express your passions, Your way</p>
                            <small className="text-lg mb-4">Create a unique and beautiful blog easily.</small>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                                Create Your Blog
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-screen w-full">
                    <div className="relative h-full">
                        <img
                            src="https://i.ibb.co/XsM617Q/banner5.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <p className="text-3xl font-bold  mb-6">Express your passions, Your way</p>
                            <small className="text-lg mb-4">Create a unique and beautiful blog easily.</small>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
                                Create Your Blog
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}

export default Banner;


