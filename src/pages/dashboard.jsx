import { Link, useNavigate } from "react-router-dom";
import DashboardTile from "../components/dashboardTile.jsx";

const Dashboard = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  console.log("User role:", role);

  // Mocked counters (sufficient for coursework)
  const stats = {
    pending: 3,
    approved: 12,
    recommended: 3,
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <div>
            <h2>Digital Knowledge Network</h2>
            <p style={styles.subtitle}>Dashboard · {role}</p>
          </div>
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* Breadcrumb */}
        <p style={styles.breadcrumb}>Home / Dashboard</p>

        {/* Stats */}
        <div style={styles.stats}>
          <div style={styles.statBox}>
            <strong>{stats.pending}</strong>
            <span>Pending Review</span>
          </div>
          <div style={styles.statBox}>
            <strong>{stats.approved}</strong>
            <span>Published Artefacts</span>
          </div>
          <div style={styles.statBox}>
            <strong>{stats.recommended}</strong>
            <span>Recommendations</span>
          </div>
        </div>

        {/* Feature Grid */}
        <div style={styles.grid}>
          <DashboardTile
            title="Submit Knowledge"
            desc="Create and submit new artefacts for review."
            link="/submit"
            label="Go to Submit"
          />

          {role === "CHAMPION" && (
            <DashboardTile
              title="Review Artefacts"
              desc="Approve or reject submitted knowledge artefacts."
              link="/review"
              label="Go to Review"
            />
          )}

          <DashboardTile
            title="Knowledge Repository"
            desc="Search and view published artefacts."
            link="/repository"
            label="Open Repository"
          />

          <DashboardTile
            title="Recommended for You"
            desc="Personalised recommendations (AI – mocked)."
            link="/recommendations"
            label="View Recommendations"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    background: "linear-gradient(120deg, #0f2027, #203a43, #2c5364)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "1000px",
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
    color: "#000",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    color: "#555",
  },
  logoutBtn: {
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#e63946",
    color: "#fff",
    fontWeight: "bold",
  },
  breadcrumb: {
    margin: "15px 0",
    fontSize: "14px",
    color: "#666",
  },
  stats: {
    display: "flex",
    gap: "15px",
    marginBottom: "30px",
  },
  statBox: {
    flex: 1,
    background: "#f1f5f9",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "20px",
  },
  tile: {
    background: "#f9fafb",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    color: "#203a43",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default Dashboard;
