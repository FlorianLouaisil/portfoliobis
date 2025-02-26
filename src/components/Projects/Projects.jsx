import React, { useState, useEffect } from "react";
import './Projects.scss';
import Modal from '../Modal/Modal.jsx';

function Project() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const [ModalContent, setModalContent] = useState([])
    useEffect(() => {
        fetch('/data/realization.json')
            .then(response => response.json()) 
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error(error); 
            });
    }, []);
    
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [isModalOpen]);

    const openModal = (id) => {
        setIsModalOpen(true);
        setModalContent(data[(id - 1)])
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="projects">
            <h2>Réalisations</h2>
            <div className="projects">
                {data.map((project) => (
                    <div className="project" key={project.id}>
                        <img src={project.image} alt={project.alt} /> 
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p> 
                        <button onClick={() => openModal(project.id)} className="openModalBtn">
                            En savoir plus
                        </button>
                    </div>
                ))}
            </div>

            {/* Modale */}
            <Modal isOpen={isModalOpen} onClose={closeModal} content={ModalContent} />
        </section>
    );
}

export default Project;
