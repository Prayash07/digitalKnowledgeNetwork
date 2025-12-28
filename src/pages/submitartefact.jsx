import { useState } from "react";

const SubmitArtefact = () => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    region: "EU",
    tags: "",
    file: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting artefact:", formData);
    setMessage("Artefact submitted successfully for review.");

    setFormData({
      title: "",
      summary: "",
      content: "",
      region: "EU",
      tags: "",
      file: null,
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Submit Knowledge Artefact</h2>
        <p style={styles.subtitle}>
          Provide details for review by Knowledge Champion
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Artefact Title"
            value={formData.title}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <textarea
            name="summary"
            placeholder="Short Summary"
            value={formData.summary}
            onChange={handleChange}
            required
            style={styles.textarea}
          />

          <textarea
            name="content"
            placeholder="Detailed Content"
            value={formData.content}
            onChange={handleChange}
            required
            style={styles.textareaLarge}
          />

          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="EU">Europe</option>
            <option value="ASIA">Asia</option>
            <option value="NA">North America</option>
          </select>

          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            value={formData.tags}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="file"
            name="file"
            onChange={handleChange}
            style={styles.fileInput}
          />

          <button type="submit" style={styles.button}>
            Submit for Review
          </button>
        </form>

        {message && <p style={styles.success}>{message}</p>}
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
    maxWidth: "520px",
    padding: "36px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
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
  input: {
    width: "100%",
    height: "44px",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
    resize: "none",
  },

  textareaLarge: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
    resize: "vertical",
  },
  fileInput: {
    width: "100%",
    height: "44px",
    padding: "8px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
    background: "#f9fafb",
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
  },
  success: {
    marginTop: "15px",
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
  },
};

export default SubmitArtefact;
