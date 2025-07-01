import React, { useState } from "react";
import UserCard from "../Components/UserCard";

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
        <>
            <h1>Project View</h1>
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
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
            </div>
        </>
    );
}

export default ProjectView;