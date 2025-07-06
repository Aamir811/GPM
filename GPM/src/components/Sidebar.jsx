import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [openProjectDropdowns, setOpenProjectDropdowns] = useState({});
    const location = useLocation();

    const toggleProjects = () => {
        setIsProjectsOpen(!isProjectsOpen);
        // Close all project dropdowns when main projects menu is closed
        if (isProjectsOpen) {
            setOpenProjectDropdowns({});
        }
    };

    const toggleProjectDropdown = (projectIndex) => {
        setOpenProjectDropdowns(prev => ({
            ...prev,
            [projectIndex]: !prev[projectIndex]
        }));
    };

    const projectItems = [
        { 
            label: 'Project 1', 
            icon: '📁',
            subItems: ['Project 1 Home', 'Settings', 'Team']
        },
        { 
            label: 'Project 2', 
            icon: '📁',
            subItems: ['Project 2 Home', 'Settings', 'Team']
        },
        { 
            label: 'Project 3', 
            icon: '📁',
            subItems: ['Project 3 Home', 'Settings', 'Team']
        },
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Link to="/" className="logo">
                    <span className="logo-text">GPM</span>
                </Link>
            </div>
            
            <nav className="sidebar-nav">
                <ul className="nav-list">
                    {/* Projects Dropdown */}
                    <li className="nav-item">
                        <div 
                            className="nav-link dropdown-toggle"
                            onClick={toggleProjects}
                        >
                            <span className="nav-icon">📊</span>
                            <span className="nav-text">Projects</span>
                            <span className={`dropdown-arrow ${isProjectsOpen ? 'open' : ''}`}>
                                ▼
                            </span>
                        </div>
                        
                        {isProjectsOpen && (
                            <ul className="dropdown-menu">
                                {projectItems.map((project, index) => (
                                    <li key={index} className="dropdown-item">
                                        <div className="project-item">
                                            <div className="nav-link sub-link">
                                                <span className="nav-icon">{project.icon}</span>
                                                <span className="nav-text">{project.label}</span>
                                            </div>
                                            <button 
                                                className="project-dropdown-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleProjectDropdown(index);
                                                }}
                                            >
                                                <span className={`project-arrow ${openProjectDropdowns[index] ? 'open' : ''}`}>
                                                    ▶
                                                </span>
                                            </button>
                                        </div>
                                        
                                        {openProjectDropdowns[index] && (
                                            <ul className="project-submenu">
                                                {project.subItems.map((subItem, subIndex) => (
                                                    <li key={subIndex} className="project-subitem">
                                                        <div className="nav-link project-sub-link">
                                                            <span className="nav-icon">•</span>
                                                            <span className="nav-text">{subItem}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar; 