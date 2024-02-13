import React from 'react';

import GradientSVG from "./GradientSVG";
import { CircularProgressbar, CircularProgressbarStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles } from "react-circular-progressbar";

const idCSS = "gradientToUse";

const SkillItem = ({ value, name, middleText }) => (
    <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
        <GradientSVG />
        <CircularProgressbar
            strokeWidth={9}
            // How far should the progress bar fill up?
            value={value}
            // What should it say in the middle of the progress bar?
            text={middleText}
            circleRatio={0.75}
            styles={{
                path: { stroke: `url(#${idCSS})`, height: "50%", transform: 'rotate(0.625turn)', transformOrigin: 'center center', },
                trail: { stroke: "#333333", transform: 'rotate(0.625turn)', transformOrigin: 'center center',},
                text: {
                    fill: "#fff",
                    fontSize: "18px",
                    fontWeight: 500
                }
                
            }}
            // Name below pertains to the name of the skill (i.e. Flutter).
        />
        <h5><br></br>{name}</h5>
    </div>
);

export default SkillItem;