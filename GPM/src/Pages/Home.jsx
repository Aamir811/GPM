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
            top: '20vh',
            left: '280px',
            right: '30px',
            bottom: '30px',
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
                maxWidth: '1000px',
                marginBottom: activeMenu ? '2rem' : '0'
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
                    </div>
                ))}
            </div>
            
            {activeMenu && (
                <div style={{
                    width: '100%',
                    flex: '1',
                    backgroundColor: 'white',
                    border: '1px solid #e9ecef',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    overflow: 'hidden',
                    animation: 'slideDown 0.4s ease-out',
                    display: 'flex',
                    flexDirection: 'column'
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
                                {menuData[activeMenu].icon}
                            </span>
                            {activeMenu}
                        </h2>
                    </div>
                    
                    <div style={{
                        flex: '1',
                        padding: '2rem',
                        overflowY: 'auto'
                    }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '1.5rem'
                        }}>
                            {menuData[activeMenu].items.map((item, index) => (
                                <div key={index} style={{
                                    padding: '1.5rem',
                                    backgroundColor: '#f8f9fa',
                                    borderRadius: '8px',
                                    border: '1px solid #e9ecef',
                                    color: '#495057',
                                    fontSize: '1.1rem',
                                    transition: 'all 0.2s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#e3f2fd';
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#f8f9fa';
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                }}
                                >
                                    <div style={{
                                        fontWeight: '600',
                                        marginBottom: '0.5rem',
                                        color: '#2c3e50'
                                    }}>
                                        {item}
                                    </div>
                                    <div style={{
                                        fontSize: '0.9rem',
                                        color: '#6c757d'
                                    }}>
                                        {activeMenu === 'My Tasks' && 'Click to view details'}
                                        {activeMenu === 'Upcoming Meetings' && 'Click to join'}
                                        {activeMenu === 'Due Soon' && 'Click to view progress'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                        max-height: 0;
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                        max-height: 100vh;
                    }
                }
            `}</style>
        </div>
    );
}

export default Home;