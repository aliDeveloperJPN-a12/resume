import { menuItems } from "@/utils/data";
import React, { useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import Logo from "../public/images/logo.png";
import Close from "../public/images/close.jpg";
import Image from "next/image";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { themeContext } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
interface Props {
    children: React.ReactNode;
    setSelect: React.Dispatch<React.SetStateAction<number>>;
    select: number;
}
const Layout = ({ children, setSelect, select }: Props) => {
    const { theme, setTheme } = useContext(themeContext);
    const element = window?.document?.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [theme]);

    const changeTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    const clickMenu = (idx: number) => {
        if (idx === select) return;
        setSelect(idx);
    };
    return (
        <div className="flex min-h-screen w-screen relative overflow-hidden">
            <div className="w-[300px] hidden lg:block shadow-lg border-l dark:border-l-[#0097f539]">
                <motion.div
                    initial={{ y: 450, opacity: 0, transitionDuration: "1s" }}
                    animate={{ y: 0, opacity: 1 }}
                    className="border-b pb-10 border-dashed dark:border-b-[#0097f539]"
                >
                    <Image className="w-[50%] h-[80px] mx-auto" src={Logo} alt="" />
                    <p className="font-ykanExtraBold text-gray-800 dark:text-white text-[16px] text-center flex items-center justify-center gap-2">
                        <span>برنامه نویس وب</span>
                        <Image className="w-7 h-7 rounded-full" src={Close} alt="" />
                    </p>
                </motion.div>
                <div className="flex flex-col mt-10">
                    {menuItems.map((menu, idx) => (
                        <motion.div
                            onClick={() => clickMenu(idx)}
                            initial={{
                                x: idx === 0 ? 400 : idx === 1 ? 550 : idx === 2 ? 600 : idx === 3 ? 650 : 700,
                                opacity: 0,
                                transitionDelay: "1s",
                                transitionDuration:
                                    idx === 0 ? "0.70s" : idx === 1 ? "1.5s" : idx === 2 ? "2s" : idx === 3 ? "2.5s" : "3s",
                                transitionTimingFunction: "ease-in-out",
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            className={`flex items-center gap-3 p-4 cursor-pointer ${
                                select === idx
                                    ? "bg-gray-200  text-[#0096f5] dark:bg-[#0095f5] dark:text-white"
                                    : "dark:text-gray-500"
                            }`}
                            key={menu.id}
                            viewport={{ once: true }}
                        >
                            <menu.icon size={29} />
                            <p className="font-yekanMedium text-[13px]">{menu.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="flex-1 w-full">{children}</div>

            <div className="w-full lg:hidden  z-50  h-10 rounded-lg  fixed left-0 bottom-10">
                <div className="w-[90%] mx-auto bg-white flex justify-between items-center px-4 drop-shadow-md h-14 rounded-xl">
                  {
                    menuItems.map((menu,idx)=>(
                        <menu.icon onClick={()=> setSelect(idx)} key={idx} className={`${select === idx ? "text-[#ea580c]" : "text-gray-700"}`} size={26}/>
                    ))
                  }
                </div>
            </div>
            <div className="absolute flex items-center gap-3 left-4 lg:left-10 top-5">
                {theme === "dark" ? (
                    <div className="w-10 h-10  flex justify-center items-center rounded-full ">
                        <BsFillSunFill size={20} onClick={changeTheme} className="cursor-pointer text-yellow-500" />
                    </div>
                ) : (
                    <div className="w-10 h-10 border flex justify-center items-center rounded-full bg-[#000000b2]">
                        <BsFillMoonFill onClick={changeTheme} className="cursor-pointer text-gray-200" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Layout;
