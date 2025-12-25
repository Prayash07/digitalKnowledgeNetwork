import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("CONSULTANT");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Store role locally (mock authentication)
    localStorage.setItem("role", role);

    // Redirect based on role
    if (role === "CONSULTANT") {
      navigate("/submit");
    } else if (role === "CHAMPION") {
      navigate("/review");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Digital Knowledge Network</h2>
        <p>Select your role to continue</p>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.select}
        >
          <option value="CONSULTANT">Consultant</option>
          <option value="CHAMPION">Knowledge Champion</option>
        </select>

        <button onClick={handleLogin} style={styles.button}>
          Enter Portal
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f4f6f8",
  },
  card: {
    padding: "30px",
    width: "320px",
    background: "#ffffff",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  select: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "20px",
    background: "#1976d2",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Login;
