import Image from "next/image";
import React, { useContext } from "react";
import Company from "../public/images/company.jpg";
import { motion } from "framer-motion";
import { themeContext } from "@/contexts/ThemeContext";
import Info from "./Info";
import Skills from "./Skills";
interface Props {
    setSelect: React.Dispatch<React.SetStateAction<number>>;
}

const AboutMe = ({ setSelect }: Props) => {
    const { theme } = useContext(themeContext);

    return (
        <div
            className={` bg-center bg-cover pb-20 lg:pb-0 pt-10 w-full h-full px-4 lg:px-14 ${
                theme === "dark" ? "" : "bg-[url('../public/images/background.jpg')]"
            }`}
        >
            <motion.div initial={{y:800,opacity:0, transitionDuration:"1s"}} animate={{y:0,opacity:1}} className="w-fit">
                <h1 className="font-ykanExtraBold text-2xl pb-2 text-orange-500">درباره‌ی من</h1>
                <span className="w-full h-[1.4px] mb-[4px] bg-orange-500 block"></span>
                <span className="w-[50%] h-[1.4px] bg-orange-500 block"></span>
                <span></span>
            </motion.div>

            <motion.p initial={{y:800,opacity:0,transitionDuration:"1s",transitionDelay:"1s"}} animate={{y:0,opacity:1}} className="font-yekanMedium mt-10 text-[16px] lg:text-xl dark:text-white text-gray-700">
                علی قانع فرد هستم
                <span className="inline-block px-2 text-orange-500">توسعه دهنده وب</span>
                هستم
            </motion.p>
            <motion.div
                initial={{ y: 800, opacity: 0, transitionDuration: "1.4s", transitionDelay:"2s" }}
                animate={{ y: 0, opacity: 1 }}
                className={`flex flex-col-reverse lg:flex-row justify-center items-center mt-10 gap-10`}
            >
                <div className="flex-[1.8]  ">
                    <p className="dark:text-white leading-10 w-full text-justify font-yekanRegular text-[15px]">
                        سلام، من توسعه دهنده‌ی Raect و Next.js  هستم. دو سال تجربه کار مخصوصا در شرکت و به صورت فریلنسری را دارم. به 
                        مدت یک سال در شرکت هوش و پدیده فناوری اورین مشغول کار بودم و طی این مدت  وب اپلیکیشن و وب سایت برای این
                        شرکت طراحی کرده ام. کار در این شرکت به من منظم بودن و کار گروهی را یاد داد و مهارت‌های زیادی را، از جمله کار با
                        استیت منیجر های مختلف و Rest Api و کتابخانه و پکیج های زیادی را کسب کرده ام.
                    </p>
                    <button
                        onClick={() => setSelect(2)}
                        className="bg-orange-500 text-white font-yekanRegular px-4 py-2 rounded-lg mt-10"
                    >
                        مشاهده نمونه کارها
                    </button>
                </div>
                <div className="flex-1">
                    <Image src={Company} alt="" className="rounded-full w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]" />
                </div>
            </motion.div>

            <div className="grid mt-10  lg:grid-cols-2 md:w-fit  gap-5 lg:gap-14">
                <Info title="تاریخ تولد" subTitle="1375/9/4" />
                <Info title="سن" subTitle="27" />
                <Info title="ایمیل" subTitle="ag062062zero@gmail.com" />
                <Info title="شماره تلفن" subTitle="09374536382" />
                <Info title="شهر" subTitle="مشهد" />
            </div>

            <Skills />
        </div>
    );
};

export default AboutMe;
