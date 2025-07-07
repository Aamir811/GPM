import React, { useState } from "react";
import UserCard from "../Components/UserCard";
import UserProjectInfo from "../Components/UserProjectInfo";

function ProjectView() {
    const [selected, setSelected] = useState(null);

    const users = [
        { name: "John Doe", role: "Project Manager" },
        { name: "Jane Smith", role: "Developer" },
        { name: "Alice Johnson", role: "Designer" },
        { name: "Bob Brown", role: "Tester" },
        { name: "Charlie White", role: "DevOps" },
        { name: "Diana Green", role: "Business Analyst" },
        { name: "Ethan Blue", role: "Data Scientist" },
        { name: "Fiona Black", role: "UX Researcher" },
        { name: "George Yellow", role: "Content Writer" },
        { name: "Hannah Purple", role: "Marketing Specialist" },
    ];

    return (
        <div style={{
            position: 'absolute',
            top: '1vh',
            left: '280px',
            right: '30px',
            bottom: '30px',
            zIndex: 1,
            padding: '2rem'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                color: '#2c3e50',
                margin: '0 0 3rem 0',
                fontWeight: 'normal',
                textAlign: 'left'
            }}>
                Project View
            </h1>
            
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "2rem",
                    width: '100%'
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        minWidth: "320px",
                        gap: "1rem"
                    }}
                >
                    {users.map((user, idx) => (
                        <button
                            key={user.name}
                            onClick={() => setSelected(idx)}
                            style={{
                                width: '100%',
                                padding: '1rem 1.5rem',
                                backgroundColor: selected === idx ? '#3498db' : '#f8f9fa',
                                color: selected === idx ? 'white' : '#2c3e50',
                                border: '2px solid #e9ecef',
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                textAlign: 'left',
                                boxShadow: selected === idx ? '0 4px 12px rgba(52, 152, 219, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                                minHeight: '80px'
                            }}
                            onMouseEnter={(e) => {
                                if (selected !== idx) {
                                    e.target.style.backgroundColor = '#e3f2fd';
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selected !== idx) {
                                    e.target.style.backgroundColor = '#f8f9fa';
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                                }
                            }}
                        >
                            <div style={{
                                fontWeight: '600',
                                fontSize: '1.2rem',
                                marginBottom: '0.3rem',
                                color: selected === idx ? 'white' : '#2c3e50'
                            }}>
                                {user.name}
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: selected === idx ? 'rgba(255, 255, 255, 0.8)' : '#6c757d',
                                fontWeight: 'normal'
                            }}>
                                {user.role}
                            </div>
                        </button>
                    ))}
                </div>
                
                <div style={{
                    flex: '1',
                    backgroundColor: 'white',
                    border: '1px solid #e9ecef',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '400px'
                }}>
                    <div style={{
                        padding: '2rem',
                        borderBottom: '1px solid #f1f3f4',
                        backgroundColor: '#f8f9fa'
                    }}>
                        <h2 style={{
                            margin: '0',
                            color: '#2c3e50',
                            fontSize: '1.8rem',
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <span style={{ fontSize: '2rem' }}>
                                👤
                            </span>
                            {selected !== null ? users[selected].name : "Select a user"}
                        </h2>
                        <div style={{
                            marginTop: '0.5rem',
                            color: '#3498db',
                            fontSize: '1.1rem',
                            fontWeight: '500'
                        }}>
                            {selected !== null ? users[selected].role : "No user selected"}
                        </div>
                    </div>
                    
                    <div style={{
                        flex: '1',
                        padding: '2rem',
                        overflowY: 'auto'
                    }}>
                        <div style={{
                            padding: '1.5rem',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            border: '1px solid #e9ecef',
                            color: '#495057',
                            fontSize: '1.1rem',
                            lineHeight: '1.6'
                        }}>
                            {selected !== null
                                ? `Details about ${users[selected].name}'s role in the project. As a ${users[selected].role}, they are responsible for key aspects of project delivery and team coordination.`
                                : "Select a user to see more information about their role in this project."
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectView;