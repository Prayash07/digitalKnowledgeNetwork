import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewArtefact = () => {
  const navigate = useNavigate();
  const [artefacts, setArtefacts] = useState([
    { id: "1", title: "GDPR Compliance Guide", status: "PENDING" },
    { id: "2", title: "Cloud Security Framework", status: "PENDING" },
  ]);

  const approveArtefact = (id) => {
    setArtefacts((prev) => prev.filter((a) => a.id !== id));
    alert("Artefact approved and published");
  };

  const rejectArtefact = (id) => {
    setArtefacts((prev) => prev.filter((a) => a.id !== id));
    alert("Changes requested for artefact");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <button onClick={() => navigate(-1)} style={styles.backBtn}>
          ← Back
        </button>
        <h2 style={styles.title}>Pending Artefacts</h2>
        <p style={styles.subtitle}>
          Review and approve submitted knowledge artefacts
        </p>

        {artefacts.length === 0 ? (
          <p style={styles.empty}>No artefacts pending review.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {artefacts.map((artefact) => (
                <tr key={artefact.id} style={styles.row}>
                  <td style={styles.td}>{artefact.title}</td>
                  <td style={styles.td}>
                    <button
                      onClick={() => approveArtefact(artefact.id)}
                      style={styles.approve}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => rejectArtefact(artefact.id)}
                      style={styles.reject}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(120deg, #0f2027, #203a43, #2c5364)",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "700px",
    padding: "36px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
    color: "#000", // ✅ ADD THIS
  },
  title: {
    textAlign: "center",
    marginBottom: "6px",
    color: "#0f2027",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#555",
    fontSize: "14px",
  },
  empty: {
    textAlign: "center",
    color: "#777",
    fontStyle: "italic",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  headerRow: {
    background: "#f4f6f8",
  },
  th: {
    textAlign: "left",
    padding: "12px",
    fontSize: "14px",
    color: "#000",
  },

  td: {
    padding: "12px",
    fontSize: "14px",
    color: "#000",
    verticalAlign: "middle",
  },
  row: {
    borderBottom: "1px solid #eee",
  },
  approve: {
    padding: "8px 14px",
    marginRight: "10px",
    background: "#2e7d32",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
  },
  reject: {
    padding: "8px 14px",
    background: "#c62828",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
  },
  backBtn: {
    marginBottom: "15px",
    background: "transparent",
    border: "none",
    color: "#1976d2",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default ReviewArtefact;
