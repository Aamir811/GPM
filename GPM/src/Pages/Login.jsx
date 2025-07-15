import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', { username, password });
    };

    return (
        <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: '#f8f9fa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '2rem'
        }}>
            <div style={{
                backgroundColor: 'white',
                border: '1px solid #e9ecef',
                borderRadius: '12px',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                padding: '3rem',
                width: '100%',
                maxWidth: '400px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    textAlign: 'center',
                    marginBottom: '2rem'
                }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        color: '#2c3e50',
                        margin: '0 0 0.5rem 0',
                        fontWeight: 'normal'
                    }}>
                        Welcome Back
                    </h1>
                    <p style={{
                        color: '#6c757d',
                        fontSize: '1.1rem',
                        margin: '0'
                    }}>
                        Please sign in to your account
                    </p>
                </div>
                
                <form onSubmit={handleLogin} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                    }}>
                        <label htmlFor="username" style={{
                            color: '#2c3e50',
                            fontSize: '1rem',
                            fontWeight: '600'
                        }}>
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={{
                                padding: '0.75rem 1rem',
                                border: '2px solid #e9ecef',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                color: '#495057',
                                backgroundColor: '#f8f9fa',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#3498db';
                                e.target.style.backgroundColor = 'white';
                                e.target.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#e9ecef';
                                e.target.style.backgroundColor = '#f8f9fa';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                    }}>
                        <label htmlFor="password" style={{
                            color: '#2c3e50',
                            fontSize: '1rem',
                            fontWeight: '600'
                        }}>
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                padding: '0.75rem 1rem',
                                border: '2px solid #e9ecef',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                color: '#495057',
                                backgroundColor: '#f8f9fa',
                                transition: 'all 0.3s ease',
                                outline: 'none'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#3498db';
                                e.target.style.backgroundColor = 'white';
                                e.target.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#e9ecef';
                                e.target.style.backgroundColor = '#f8f9fa';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#3498db',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            marginTop: '1rem',
                            boxShadow: '0 2px 8px rgba(52, 152, 219, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#2980b9';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 4px 12px rgba(52, 152, 219, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#3498db';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 2px 8px rgba(52, 152, 219, 0.3)';
                        }}
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;