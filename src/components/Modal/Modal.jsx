import React from "react";
import './Modal.scss'

const Modal = ({ isOpen, onClose, children, content }) => {

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{content.title}</h2>
                <img src={content.image} alt={content.alt} className="modal-image" />
            
                {content.modal.githubLink && (
                    <a href={content.modal.githubLink} target="_blank" rel="noopener noreferrer">Lien GitHub</a>
                )}

                <h3>Description</h3>
                <p>{content.modal.description}</p>
                <h3>Problématique rencontrée</h3>
                <p>{content.modal.issue}</p>
                <h3>Compétences développées</h3>
                <ul>
                    {content.modal.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <button className="close-btn" onClick={onClose}>×</button>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
