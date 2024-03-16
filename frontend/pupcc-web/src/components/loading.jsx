import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import loading from "../assets/puplaris-loading.gif";

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }} // Set initial opacity
            animate={{ opacity: 1 }} // Set animate opacity (to maintain opacity during initial render)
            exit={{ opacity: 0 }} // Set exit opacity (for fade-out animation)
            className="bg-[url(https://cdn.discordapp.com/attachments/813768653761806366/1218410348223139921/Untitled_design_13.png?ex=6607900f&is=65f51b0f&hm=814f08f6efce005ec35044dc541a092a54a3d9ef455f7b8d9816941ca8e9514f&)] bg-cover bg-center w-screen h-screen flex flex-col justify-center items-center overflow-hidden"
        >
            <img className="w-2/5" src={loading} alt="Loading.." />
            <p className="text-white text-lg mt-4">Fetching information...</p>
        </motion.div>
    );
}
