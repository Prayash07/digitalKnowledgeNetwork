import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Repository = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Mocked artefacts
  const artefacts = [
    {
      title: "GDPR Compliance Guide",
      summary: "Best practices for EU data handling",
      tags: ["GDPR", "Compliance", "EU"],
    },
    {
      title: "Cloud Security Framework",
      summary: "Security controls for cloud systems",
      tags: ["Cloud", "Security"],
    },
    {
      title: "AI Policy Draft",
      summary: "Guidelines for AI usage in enterprises",
      tags: ["AI", "Policy"],
    },
  ];

  // Filter artefacts by search term
  const filteredArtefacts = artefacts.filter(
    (a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <button onClick={() => navigate(-1)} style={styles.backBtn}>
          ← Back
        </button>
        <h2 style={styles.heading}>Knowledge Repository</h2>
        <p style={styles.subheading}>Search and view published artefacts</p>

        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by title or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.list}>
          {filteredArtefacts.length === 0 ? (
            <p>No artefacts found.</p>
          ) : (
            filteredArtefacts.map((artefact, idx) => (
              <div key={idx} style={styles.item}>
                <div>
                  <h4 style={styles.title}>{artefact.title}</h4>
                  <p style={styles.summary}>{artefact.summary}</p>
                  <p style={styles.tags}>
                    {artefact.tags.map((tag, i) => (
                      <span key={i} style={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </p>
                </div>
                <button
                  style={styles.viewBtn}
                  onClick={() => navigate("/artifact")}
                >
                  View
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Repository;

const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    background: "linear-gradient(120deg, #0f2027, #203a43, #2c5364)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "40px 20px",
  },
  card: {
    width: "100%",
    maxWidth: "900px",
    background: "#fff",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
    color: "#000",
  },
  heading: {
    marginBottom: "6px",
  },
  subheading: {
    marginBottom: "20px",
    color: "#555",
    fontSize: "14px",
  },
  searchContainer: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "15px 20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#f9fafb",
  },
  title: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
  },
  summary: {
    margin: "5px 0 0",
    fontSize: "14px",
    color: "#555",
  },
  tags: {
    marginTop: "6px",
  },
  tag: {
    display: "inline-block",
    marginRight: "6px",
    padding: "3px 8px",
    background: "#1976d2",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "12px",
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
    background: "#203a43",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    alignSelf: "center",
  },
};
