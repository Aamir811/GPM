import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const location = useLocation();

    const toggleProjects = () => {
        setIsProjectsOpen(!isProjectsOpen);
    };

    const projectItems = [
        { label: 'Project 1', icon: '📁' },
        { label: 'Project 2', icon: '📁' },
        { label: 'Project 3', icon: '📁' },
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
                                        <div className="nav-link sub-link">
                                            <span className="nav-icon">{project.icon}</span>
                                            <span className="nav-text">{project.label}</span>
                                        </div>
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