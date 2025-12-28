import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CONSULTANT");

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Logging in with", JSON.parse(localStorage.getItem("user")));
    console.log("saved user", username);
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.username === username &&
      savedUser.password === password
    ) {
      localStorage.setItem("role", role);
      navigate(role === "CONSULTANT" ? "/submit" : "/review");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Digital Knowledge Network</h2>
        <p style={styles.subtitle}>Sign in to your account</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        >
          <option value="CONSULTANT">Consultant</option>
          <option value="CHAMPION">Knowledge Champion</option>
        </select>

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

        <p style={styles.footerText}>
          New user?{" "}
          <Link to="/register" style={styles.link}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(120deg, #0f2027, #203a43, #2c5364)",
  },
  card: {
    width: "100%",
    maxWidth: "380px",
    padding: "36px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  title: {
    marginBottom: "6px",
    color: "#0f2027",
  },
  subtitle: {
    marginBottom: "25px",
    color: "#555",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "12px",
    height: "44px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#203a43",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  footerText: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#203a43",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default Login;
