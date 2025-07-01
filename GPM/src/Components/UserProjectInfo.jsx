import React from 'react';

function UserProjectInfo({ name, role, details }) {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                margin: '8px',
                width: '50vw',
                height: '40vw'
            }}
        >
            <h2 style={{ margin: '0 0 8px 0' }}>{name}</h2>
            <h4 style={{ margin: '0 0 12px 0', color: '#1976d2' }}>{role}</h4>
            <div style={{ color: '#444' }}>
                {details ? details : "Select a user to see more information about their role in this project."}
            </div>
        </div>
    );
}

export default UserProjectInfo;