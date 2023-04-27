import React from "react";
import {motion} from "framer-motion"
interface Props {
    title: string;
    subTitle: string;
}
const Info = ({ title, subTitle }: Props) => {
    return (
        <motion.div initial={{y:800,opacity:0,transitionDuration:"2s", transitionDelay:"2s"}} animate={{y:0,opacity:1}} className="flex items-center font-yekanRegular text-xs border-b pb-2 border-orange-500 dark:text-white">
            <p className="whitespace-nowrap">{title} : </p>
            <p className="font-yekanLight text-xs px-2">{subTitle}</p>
        </motion.div>
    );
};

export default Info;
