import { useNavigate } from "react-router-dom";

const Recommendations = () => {
  const navigate = useNavigate();

  const recommendations = [
    {
      id: 1,
      title: "GDPR Compliance Guide",
      reason: "Based on your recent activity and EU region",
    },
    {
      id: 2,
      title: "EU Data Localisation Policy",
      reason: "Recommended due to regulatory relevance",
    },
    {
      id: 3,
      title: "Cloud Risk Assessment Template",
      reason: "Frequently accessed by consultants",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <button onClick={() => navigate(-1)} style={styles.backBtn}>
          ← Back
        </button>
        <h2 style={styles.heading}>Recommended for You</h2>
        <p style={styles.subheading}>
          Personalised suggestions based on your role, region, and activity (AI
          – mocked)
        </p>

        <div style={styles.list}>
          {recommendations.map((item) => (
            <div key={item.id} style={styles.item}>
              <div>
                <h4 style={styles.title}>✔ {item.title}</h4>
                <p style={styles.reason}>{item.reason}</p>
              </div>

              <button
                style={styles.viewBtn}
                onClick={() => navigate("/artifact")}
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;

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
    maxWidth: "800px",
    background: "#ffffff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    color: "#000",
  },
  heading: {
    marginBottom: "8px",
  },
  subheading: {
    marginBottom: "25px",
    color: "#555",
    fontSize: "14px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#f9fafb",
  },
  title: {
    margin: 0,
    fontSize: "16px",
  },
  reason: {
    margin: "6px 0 0",
    fontSize: "13px",
    color: "#555",
  },
  backBtn: {
    marginBottom: "15px",
    background: "transparent",
    border: "none",
    color: "#1976d2",
    cursor: "pointer",
    fontSize: "14px",
  },
  viewBtn: {
    minWidth: "90px",
    padding: "10px",
    background: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
