import React from 'react';

function UserCard({ name, role, selected, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                border: selected ? '1px solid rgb(0, 140, 255)' : '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                width: '250px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                margin: '8px',
                cursor: 'pointer',
                transition: 'border 0.2s'
            }}
        >
            <h2 style={{ margin: '0 0 8px 0' }}>{name}</h2>
            <p style={{ color: '#555', margin: 0 }}>{role}</p>
        </div>
    );
}

export default UserCard;