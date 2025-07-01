import { useState } from 'react';

function Home() {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    const myTasks = [
        "Fortnite",
        "Valorant",
        "CSGO",
    ];

    const upcomingMeetings = [
        "Wake Up - 9:00 AM",
        "Go to the Gym - 2:00 PM",
        "Idk - 4:00 PM"
    ];

    const dueSoon = [
        "Engineering Lab - 2 days",
        "Chem Lab - 3 days",
        "CS Lab - 5 days"
    ];

    const menuData = {
        'My Tasks': { items: myTasks, icon: '✅' },
        'Upcoming Meetings': { items: upcomingMeetings, icon: '📅' },
        'Due Soon': { items: dueSoon, icon: '⏰' }
    };

    return (
        <div style={{
            position: 'absolute',
            top: '25vh',
            left: '280px',
            right: '30px',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                color: '#2c3e50',
                margin: '0 0 3rem 0',
                fontWeight: 'normal',
                textAlign: 'center'
            }}>
                Hello User
            </h1>
            
            <div style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: '100%',
                maxWidth: '1000px'
            }}>
                {Object.entries(menuData).map(([menuName, data]) => (
                    <div key={menuName} style={{
                        minWidth: '280px',
                        maxWidth: '320px',
                        flex: '1'
                    }}>
                        <button
                            onClick={() => toggleMenu(menuName)}
                            style={{
                                width: '100%',
                                padding: '1rem 1.5rem',
                                backgroundColor: activeMenu === menuName ? '#3498db' : '#f8f9fa',
                                color: activeMenu === menuName ? 'white' : '#2c3e50',
                                border: '2px solid #e9ecef',
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                boxShadow: activeMenu === menuName ? '0 4px 12px rgba(52, 152, 219, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)'
                            }}
                            onMouseEnter={(e) => {
                                if (activeMenu !== menuName) {
                                    e.target.style.backgroundColor = '#e3f2fd';
                                    e.target.style.transform = 'translateY(-2px)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeMenu !== menuName) {
                                    e.target.style.backgroundColor = '#f8f9fa';
                                    e.target.style.transform = 'translateY(0)';
                                }
                            }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontSize: '1.2rem' }}>{data.icon}</span>
                                {menuName}
                            </span>
                            <span style={{
                                fontSize: '0.8rem',
                                transform: activeMenu === menuName ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease'
                            }}>
                                ▼
                            </span>
                        </button>
                        
                        {activeMenu === menuName && (
                            <div style={{
                                marginTop: '1rem',
                                backgroundColor: 'white',
                                border: '1px solid #e9ecef',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                overflow: 'hidden',
                                animation: 'slideDown 0.3s ease-out'
                            }}>
                                {data.items.map((item, index) => (
                                    <div key={index} style={{
                                        padding: '0.75rem 1rem',
                                        borderBottom: index < data.items.length - 1 ? '1px solid #f1f3f4' : 'none',
                                        color: '#495057',
                                        fontSize: '0.95rem',
                                        transition: 'background-color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#f8f9fa';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                    }}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default Home;