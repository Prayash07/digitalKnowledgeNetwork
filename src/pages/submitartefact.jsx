import { useState } from "react";

const SubmitArtefact = () => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    region: "EU",
    tags: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mock API call (replace with real REST later)
    console.log("Submitting artefact:", formData);

    setMessage("Artefact submitted successfully for review.");

    // Reset form
    setFormData({
      title: "",
      summary: "",
      content: "",
      region: "EU",
      tags: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2>Submit Knowledge Artefact</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <textarea
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
          required
          style={styles.textarea}
        />

        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          required
          style={styles.textarea}
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

        <button type="submit" style={styles.button}>
          Submit for Review
        </button>
      </form>

      {message && <p style={styles.success}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
  },
  form: {
    maxWidth: "500px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    background: "#1976d2",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  success: {
    marginTop: "15px",
    color: "green",
  },
};

export default SubmitArtefact;
