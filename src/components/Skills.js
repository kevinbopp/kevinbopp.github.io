import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SkillItem from "./SkillItem";

import GradientSVG from "./GradientSVG";
import { CircularProgressbar, CircularProgressbarStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles } from "react-circular-progressbar";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    // Used to override React carousel arrows so we scroll more than one at a time.
    const [itemsToScroll, setItemsToScroll] = useState(1);

    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 991 },
            items: 6,
            scroll: 6
        },
        tablet: {
            breakpoint: { max: 991, min: 767 },
            items: 4,
            scroll: 4
        },
        mobile: {
            breakpoint: { max: 767, min: 466 },
            items: 3,
            scroll: 3
        },
        mobilesmall: {
            breakpoint: { max: 466, min: 333 },
            items: 2,
            scroll: 2
        },
        tiniest: {
            breakpoint: { max: 333, min: 0 },
            items: 1,
            scroll: 1
        }
    };

    useEffect(() => {
        // Update itemsToScroll based on the current breakpoint
        const handleResponsive = () => {
            const width = window.innerWidth;
            if (width >= 991) {
                setItemsToScroll(responsive.desktop.scroll);
            } else if (width >= 767) {
                setItemsToScroll(responsive.tablet.scroll);
            } else if (width >= 466) {
                setItemsToScroll(responsive.mobile.scroll);
            } else if (width >= 333) {
                setItemsToScroll(responsive.mobilesmall.scroll);
            } else {
                setItemsToScroll(responsive.tiniest.scroll);
            }
        };

        // Call handleResponsive on initial render and on window resize
        handleResponsive();
        window.addEventListener('resize', handleResponsive);
        return () => window.removeEventListener('resize', handleResponsive);
    }, []);

    const idCSS = "gradientToUse";

    return (
        <section className="skill" id="skills">
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p className="padMePlease">I am well-versed in a number of different programming languages,
                            tools, and programs. My extensive experience comes
                            from team-based deliverables and passion projects
                            in front-end web and videogame development.
                            <br></br>To view some of my skills in order of experience, use the
                            <span className="hilight"> arrows </span> or
                            <span className="hilight"> swipe </span>below.</p>
                        <Carousel responsive={responsive} infinite={false}
                         className="owl-carousel owl-theme skill-slider" slidesToSlide={itemsToScroll}>
                            <SkillItem value={100} middleText={"MS Office"} name={"Certified"} />
                            <SkillItem value={95} middleText={"Git"} name={"Proficient"} />
                            <SkillItem value={92} middleText={"Agile"} name={"Proficient"} />
                            <SkillItem value={88} middleText={"HTML/CSS"} name={"Experienced"} />
                            <SkillItem value={84} middleText={"JavaScript"} name={"Experienced"} />
                            <SkillItem value={79} middleText={"React"} name={"Skilled"} />
                            <SkillItem value={79} middleText={"Figma"} name={"Skilled"} />
                            <SkillItem value={77} middleText={"Unity3D"} name={"Skilled"} />
                            <SkillItem value={70} middleText={"C#"} name={"Familiar"} />
                            <SkillItem value={65} middleText={"TypeScript"} name={"Familiar"} />
                            <SkillItem value={60} middleText={"Flutter"} name={"Familiar"} />
                            <SkillItem value={60} middleText={"Dart"} name={"Familiar"} />
                            <SkillItem value={59} middleText={"OOP"} name={"Competent"} />
                            <SkillItem value={50} middleText={"Java"} name={"Competent"} />
                            <SkillItem value={45} middleText={"Unit Testing"} name={"Intermediate"} />
                            <SkillItem value={40} middleText={"C++"} name={"Intermediate"} />
                            <SkillItem value={25} middleText={"Godot"} name={"Novice"} />
                            <SkillItem value={10} middleText={"Unreal"} name={"Learning"} />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}