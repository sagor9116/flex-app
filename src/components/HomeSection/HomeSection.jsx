import React from 'react';
import Button from '../Button/Button';

const HomeSection = () => {
    return (
        <div className="container mx-auto lg:pl-32 lg:pr-32 mt-20">
            <div className="grid grid-cols-2 gap-6">
                <div className="">
                    <h1 className="text-4xl font-bold text-gray-800 capitalize mb-6">Enable Simpler, faster, <br/> Cheaper business payments</h1>
                    <p className="text-gray-500 mb-12 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab atque doloribus pariatur, cupiditate fugit blanditiis corrupti qui sit quidem et alias tenetur laudantium iure rem ipsam minus eum soluta!</p>
                    <Button>Open an account</Button>
                </div>
                <div className="">
                    <img src="https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="" className=""/>
                </div>
            </div>
        </div>
    )
}

export default HomeSection;
