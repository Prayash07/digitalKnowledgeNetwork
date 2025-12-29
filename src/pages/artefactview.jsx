import { useParams, useNavigate } from "react-router-dom";

const ArtefactView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock artefact data (replace with REST call later)
  const artefact = {
    id,
    title: "GDPR Compliance Guide",
    summary: "Best practices for EU data handling and compliance.",
    content:
      "This artefact provides an overview of GDPR principles, lawful data processing, user consent, and data protection measures.",
    region: "Europe",
    tags: ["GDPR", "Compliance", "EU"],
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <button onClick={() => navigate(-1)} style={styles.backBtn}>
          ← Back
        </button>

        <h2 style={styles.title}>{artefact.title}</h2>
        <p style={styles.summary}>{artefact.summary}</p>

        <div style={styles.section}>
          <strong>Region:</strong> {artefact.region}
        </div>

        <div style={styles.section}>
          <strong>Tags:</strong>{" "}
          {artefact.tags.map((tag) => (
            <span key={tag} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div style={styles.contentBox}>
          <h4>Content</h4>
          <p>{artefact.content}</p>
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
    padding: "30px",
  },
  card: {
    width: "100%",
    maxWidth: "900px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    color: "#000",
  },
  backBtn: {
    marginBottom: "15px",
    background: "transparent",
    border: "none",
    color: "#1976d2",
    cursor: "pointer",
    fontSize: "14px",
  },
  title: {
    marginBottom: "10px",
  },
  summary: {
    marginBottom: "20px",
    color: "#555",
  },
  section: {
    marginBottom: "10px",
  },
  tag: {
    display: "inline-block",
    background: "#e3f2fd",
    color: "#1976d2",
    padding: "4px 10px",
    borderRadius: "15px",
    marginLeft: "8px",
    fontSize: "12px",
  },
  contentBox: {
    marginTop: "20px",
    padding: "15px",
    background: "#f9fafb",
    borderRadius: "8px",
  },
};

export default ArtefactView;
