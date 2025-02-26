import React, { useState, useEffect } from "react";
import './Skills.scss';

const Skills = () => {
    const [skillsData, setSkillsData] = useState([]);

    useEffect(() => {
        fetch('/data/skills.json')
            .then(response => response.json())
            .then(data => setSkillsData(data))
            .catch(error => console.error('Erreur de chargement des compétences:', error));
    }, []);

    return (
        <section className="skills">
            <h2>Compétences</h2>
            <div className="skills-grid">
                {skillsData.map((category, index) => (
                    <div className="skills-card" key={index}>
                        <h3>{category.category}</h3>
                        <ul>
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>
                                    <i className={skill.icon}></i> {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;