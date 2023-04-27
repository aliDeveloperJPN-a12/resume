import { projects } from "@/utils/data";
import React from "react";
import CardProject from "./CardProject";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="w-[90%] mx-auto pb-20 lg:pb-0 mt-10">
            <motion.div
                initial={{ y: -100, opacity: 0, transitionDuration: "0.5s" }}
                animate={{ y: 0, opacity: 1 }}
                className="w-fit"
            >
                <h1 className="font-ykanExtraBold text-2xl pb-2 text-orange-500">نمونه کارها</h1>
                <span className="w-full h-[1.4px] mb-[4px] bg-orange-500 block"></span>
                <span className="w-[50%] h-[1.4px] bg-orange-500 block"></span>
                <span></span>
            </motion.div>
            <motion.div
                viewport={{ once: true }}
                initial={{ y: 900, opacity: 0, transitionDuration: "1s" }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-14 grid justify-items-center  lg:grid-cols-3 gap-10 pb-10"
            >
                {projects.map((project, idx) => (
                    <CardProject key={idx} project={project} />
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
