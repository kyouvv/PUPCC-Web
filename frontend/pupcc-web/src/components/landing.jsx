import React from "react";
import '../output.css';
import PUPCCLogo from '../assets/PUPCC-Logo.png';
import { FaFacebook, FaDiscord } from "react-icons/fa6";
import SearchBar from "./searchbar";
import LoadingScreen from "./loading.jsx";
import { motion as m } from "framer-motion";

const Landing = ({ data }) => {
    return (
        <m.div
            initial={{ opacity: 0 }} // Initial opacity set to 0
            animate={{ opacity: 1 }} // Animation to fade in with opacity 1
            transition={{ duration: 1 }} // Transition duration
            className={`bg-[url('https://cdn.discordapp.com/attachments/813768653761806366/1217797882032164896/Untitled_design_11.png?ex=660555a8&is=65f2e0a8&hm=0425a2db9b56ce595c62a4ee5143e2245a57ee0855c1e8ab613712b0af63a34a&')] bg-cover bg-center h-screen w-screen flex justify-center items-center`}
        >
            <m.div 
            initial={{ opacity: 0 }} // Initial opacity set to 0
            animate={{ opacity: 1 }} // Animation to fade in with opacity 1
            transition={{ duration: 1 }} // Transition duration
             className="card lg:card-side bg-base-200 text-center w-auto shadow-xl flex flex-col items-center">
                <m.img
                    initial={{ opacity: 0, y: 20 }} // Initial opacity and y position
                    animate={{ opacity: 1, y: 0 }} // Animation to fade in with opacity 1 and y position 0
                    transition={{ duration: 0.5 }} // Transition duration
                    className="h-96 object-contain p-4"
                    src={PUPCCLogo}
                    alt="PUPCC-LOGO"
                />
                <div className="w-96 m-5 flex flex-col items-center">
                    <SearchBar data={data} />
                    <button className='btn bg-success'><i className="material-icons">visibility</i>View Database</button>
                    <div className="mt-2 p-2 border border-gray-300 rounded-md w-full text-justify bg-base-100">
                        <p>PUP Campus Connect Organizations Database contains information on active organizations within the PUP System. This database aims to help students find organizations that interest them and have information about the organizations as they need.</p>
                    </div>
                    <div className="mt-5 rounded-md w-full p-1 text-right">
                        <button className='mr-2 btn btn-circle bg-blue-300'><FaFacebook /></button>
                        <button className='btn btn-circle bg-blue-900'><FaDiscord color='white' /></button>
                    </div>
                </div>
            </m.div>
        </m.div>
    );
}

export default Landing;
