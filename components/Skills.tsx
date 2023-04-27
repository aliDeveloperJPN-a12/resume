import React from "react";
import { CardSkill } from "./CardSkill";
import { skills } from "../utils/skills";
const Skills = () => {
    return (
        <div className="w-[90%] lg:w-[60%] mx-auto grid grid-cols-2 lg:grid-cols-4 items-center gap-7 pb-10 justify-items-center mt-24 ">
            {skills.map((skill, idx) => (
                <CardSkill skill={skill} key={idx} />
            ))}
        </div>
    );
};

export default Skills;
