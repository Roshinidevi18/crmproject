import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // your login logic here
    navigate("/dashboard");
  };

  const handleRegisterRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="main-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">LOGIN</button>
        </form>

        <div style={{ marginTop: '16px' }}>
          <span>Don't have an account?</span>
          <button
            onClick={handleRegisterRedirect}
            style={{
              marginLeft: '10px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              padding: '10px 16px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
