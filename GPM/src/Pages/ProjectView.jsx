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
                margin: '0 0 2rem 0',
                fontWeight: 'normal'
            }}>Project View</h1>
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "2rem"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        minWidth: "270px",
                    }}
                >
                    {users.map((user, idx) => (
                        <UserCard
                            key={user.name}
                            name={user.name}
                            role={user.role}
                            selected={selected === idx}
                            onClick={() => setSelected(idx)}
                        />
                    ))}
                </div>
                <UserProjectInfo
                    name={selected !== null ? users[selected].name : "Select a user"}
                    role={selected !== null ? users[selected].role : "No user selected"}
                    details={
                        selected !== null
                            ? `Details about ${users[selected].name}'s role in the project.`
                            : "Select a user to see more information about their role in this project."
                    }
                />
            </div>
        </div>
    );
}

export default ProjectView;