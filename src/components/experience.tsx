import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Translate from "@docusaurus/Translate";
const experience = [
    {
        company: "IMT Nord Europe",
        position: "Engineering Diploma in Information Technology",
        date: "Sep 2013- July 2019 ",
        desc: {
            1: "General engineering, plenty of maths, physics, electronics, computer science.",
            2: "Specialization in Cybersecurity and Big Data",
            3: "Had the chance to have internships and work experiences in Czech Republic, Malaysia, China."
        },
    },
    {
        company: "Shanghai Jiao Tong University",
        position: "Exchange Graduate",
        date: "Jan 2018 - July 2018 ",
        desc: {
            1: "Security engineering : Cryptography, Block-cipher design, Cryptoanalysis & attacks",
            2: "Web search & Mining : Information retrieval",
            3: "Big Data Security : Secure multi-party computation",
            4: "Machine Learning : supervised learning, unsupervised learning, learning theory, probabilistic graphical models"
        },
    },
    {
        company: "SANS Institute",
        position: "Attendee - Cybersecurity masterclasses & certification",
        date: "Sep 2022 | July 2023",
        desc: {
            1: "MGT551 - Building & Leading Security Operations Center (Sep 2022). Resulted in GIAC Security Operations Manager certification 4 months later (Jan 2023) as well as GIAC Advisory Board member.",
            2: "SEC599 - Defeating Advanced Adversaries - Purple Team Tactics & Kill Chain Defenses (July 2023)"
        },
    },
    {
        company: "Decathlon Digital",
        position: "SOC Practice Lead",
        date: "Jan 2019 - till now ",
        desc: {
            1: "Started in 2019 - Joined a brand new security operations team in 'trial' period, a team of two.\n\n Set up of SIRP, SIEM, security detections & remediations. Really started embracing automation since we were so few.",
            2: "2020 - I start my cloud security journey. CSPM technical implementation & design at global scale.",
            3: "2021 - As a SOC Technical Leader, designing & setting up SOC tooling with an automation-friendly mindset, also ended up managing two amazing teammates to fulfill this purpose. Designed & built SOC cloud infrastructure.",
            4: "Aug 2022 - Designing overall SOC approach, strategy, processes, tools & metrics with an automation-driven mindset. Increasing its efficiency & aligning SOC use-cases with threat intelligence & business needs. Internal team of five."
        },
    },
];
function Experience() {
    const [value, setValue] = useState(0);
    const { company, position, date, desc } = experience[value];

    return (
        <section className="experience">
            <h2 className="experience-title">
                <Translate>Experience</Translate>
            </h2>
            <div className="underline"></div>
            <div className="experiences-center">
                <div className="btn-container">
                    {experience.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => setValue(index)}
                                className={`experience-btn ${index === value && "active-btn"}`}
                            >
                                {item.company}
                            </button>
                        );
                    })}
                </div>
                <article className="experience-info">
                    <h3>{position}</h3>
                    <h4>{company}</h4>
                    <p className="experience-date">{date}</p>
                    {Object.keys(desc).map((key, index) => {
                        return (
                            <div key={index} className="experience-desc">
                                {<FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                    className="experience-icon"
                                ></FontAwesomeIcon>}
                                <p>{desc[key]}</p>
                            </div>
                        );
                    })}
                </article>
            </div>
        </section>
    );
}

export default Experience;
