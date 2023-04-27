import AboutMe from "@/components/AboutMe";
import ContectMe from "@/components/ContectMe";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const Index = () => {
    const [select, setSelect] = useState(0);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [select]);

    return (
        <Layout select={select} setSelect={setSelect}>
            {select === 0 && <Home setSelect={setSelect} />}
            {select === 1 && <AboutMe setSelect={setSelect} />}
            {select === 2 && <Projects />}
            {select === 3 && <ContectMe />}
        </Layout>
    );
};

export default Index;
