import Image from "next/image";
import React from "react";
import Digix from "../public/images/digix.png";
import { motion } from "framer-motion";
interface Props {
    project: {
        url: string;
        title: string;
        description: string;
        image: any;
    };
}

const CardProject = ({ project }: Props) => {
    return (
        <div
      
            className="w-[300px] h-[300px] group cursor-pointer  relative border dark:border-gray-600 rounded-xl !shadow-md z-50  overflow-hidden"
        >
            <div className="h-full w-full">
                <Image fill src={project.image} className="z-30 object-contain bg-white " alt="" />
            </div>
            <div className="z-50 bg-white dark:bg-[#00000099] absolute flex flex-col justify-between  w-full h-full top-0 mt-96 group-hover:mt-0 transition-all duration-1000">
                <p className="p-6 text-gray-600 dark:text-white">
                    <span className="font-ykanExtraBold block text-xl ">{project.title}</span>
                    <span className="font-yekanRegular block text-[14px] text-justify pt-4">{project.description}</span>
                </p>
                <div className="w-[90%] mx-auto mb-6 ">
                    <button className="text-white w-full text-xs font-yekanMedium bg-[#0096f5]  py-3 rounded-xl">
                        <a href={project.url}>مشاهده وب سایت</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProject;
