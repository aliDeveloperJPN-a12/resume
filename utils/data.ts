import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdGroupWork, MdLocalLibrary } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";
import Sku from "../public/images/sku.png";
import Digix from "../public/images/digix.png";
import Shopdress from "../public/images/shop.png";
import Shoping from "../public/images/shoping.png";
import Pinterest from "../public/images/pinterest.png";
import Lover from "../public/images/lover.png";
export const menuItems = [
    {
        id: 1,
        name: "خانه",
        icon: AiFillHome,
    },
    {
        id: 2,
        name: "درباره‌ی من",
        icon: FaUser,
    },
    {
        id: 3,
        name: "نمونه کارها",
        icon: MdGroupWork,
    },
    {
        id: 4,
        name: "تماس با من",
        icon: MdLocalLibrary,
    },
];

export const projects = [
    {
        image: Lover,
        title: "پیام رسان، صوتی و تصویری و پیام",
        description: "فرانت کار با استفاده از Mui و Tailwind , RestApi .و ... استفاده شده است",
        url: "https://lover369.com",
    },
    {
        image: Sku,
        title: "پروژه دانشجویی",
        description:
            "فرانت کار با استفاده از antd و tailwind و بک اند با استفاده از Next.js , دیتایس MongoDb کار شده است. این پروژه شامل پنل آدمین و پنل کاربری میباشد",
        url: "https://sku-norouzi.vercel.app/",
    },
    {
        image: Digix,
        title: "صرافی آنلاین",
        description:
            "فرانت کار با استفاده از antd و tailwind و بک اند با استفاده از Next.js , دیتایس Postgresql کار شده است.   در این پروژه میتوانید ارز دیجیتال خرید و فروش کنید. ",
        url: "https://digix.vercel.app/auth/phone",
    },
    {
        image: Shopdress,
        title: "لباس فروشی آنلاین",
        description: "فرانت کار با استفاده از antd و tailwind و بک اند با استفاده از Next.js , دیتایس MongoDb کار شده است. ",
        url: "https://shop-dress.vercel.app",
    },
    {
        image: Shoping,
        title: "سوپر مارکت آنلاین",
        description: "فرانت کار با استفاده از antd و tailwind و بک اند با استفاده از Next.js , دیتایس MongoDb کار شده است. ",
        url: "https://clone-shop-okala.vercel.app/",
    },
    {
        image: Pinterest,
        title: "pinterest",
        description: "فرانت کار با استفاده از antd و tailwind و بک اند با استفاده از Next.js , دیتایس MongoDb کار شده است. ",
        url: "https://nextjs-pinterest.vercel.app/",
    },
];
