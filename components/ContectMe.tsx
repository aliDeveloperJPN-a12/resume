import React from "react";
import { motion } from "framer-motion";
import Info from "./Info";
import Social from "./Social";
const ContectMe = () => {
    return (
        <div className="w-[90%] mx-auto mt-10">
            <motion.div
                initial={{ y: 800, opacity: 0, transitionDuration: "1s" }}
                animate={{ y: 0, opacity: 1 }}
                className="w-fit"
            >
                <h1 className="font-ykanExtraBold text-2xl pb-2 text-orange-500"> تماس با من</h1>
                <span className="w-full h-[1.4px] mb-[4px] bg-orange-500 block"></span>
                <span className="w-[50%] h-[1.4px] bg-orange-500 block"></span>
                <span></span>
            </motion.div>

            <motion.div
                initial={{ y: 800, opacity: 0, transitionDelay: "0.5s" }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-10 lg:w-[50%] flex flex-col gap-7"
            >
                <Info title="ایمیل" subTitle="ag062062zero@gmail.com" />
                <Info title="شماره تلفن" subTitle="09374536382" />
            </motion.div>

            <div className="mt-14">
                <motion.div
                    initial={{ y: 800, opacity: 0, transitionDelay: "3s", transitionDuration: "1s" }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-fit mb-10"
                >
                    <h1 className="font-ykanExtraBold text-2xl pb-2 text-orange-500">شبکه های اجتماعی</h1>
                    <span className="w-full h-[1.4px] mb-[4px] bg-orange-500 block"></span>
                    <span className="w-[50%] h-[1.4px] bg-orange-500 block"></span>
                    <span></span>
                </motion.div>
                <motion.div
                    initial={{ y: 800, opacity: 0, transitionDelay: "4s", transitionDuration: "1s" }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <Social />
                </motion.div>
            </div>
        </div>
    );
};

export default ContectMe;
