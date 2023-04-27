import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
interface Props {
    skill: {
        name: string;
        image: any;
    };
}
export const CardSkill = ({ skill }: Props) => {
    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ y: 100, opacity: 0, transitionDuration: "1s" }}
            whileInView={{ y: 0, opacity: 1 }}
            className="w-28 h-28 lg:w-24 lg:h-24 shadow-md border rounded-full flex flex-col justify-center items-center"
        >
            <Image className="w-8 h-8" src={skill.image} alt="" />
            <p className="font-yekanMedium pt-2 dark:text-white">{skill.name}</p>
        </motion.div>
    );
};
