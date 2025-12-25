import { useState } from "react";

const ReviewDashboard = () => {
  const [artefacts, setArtefacts] = useState([
    {
      id: "1",
      title: "GDPR Compliance Guide",
      status: "PENDING",
    },
    {
      id: "2",
      title: "Cloud Security Framework",
      status: "PENDING",
    },
  ]);

  const approveArtefact = (id) => {
    setArtefacts(artefacts.filter((a) => a.id !== id));
    alert("Artefact approved and published");
  };

  const rejectArtefact = (id) => {
    setArtefacts(artefacts.filter((a) => a.id !== id));
    alert("Changes requested for artefact");
  };

  return (
    <div style={styles.container}>
      <h2>Pending Artefacts for Review</h2>

      {artefacts.length === 0 ? (
        <p>No artefacts pending review.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {artefacts.map((artefact) => (
              <tr key={artefact.id}>
                <td>{artefact.title}</td>
                <td>
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
  );
};

const styles = {
  container: {
    padding: "30px",
  },
  table: {
    width: "100%",
    maxWidth: "600px",
    borderCollapse: "collapse",
  },
  approve: {
    marginRight: "10px",
    padding: "6px 12px",
    background: "green",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  reject: {
    padding: "6px 12px",
    background: "red",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default ReviewDashboard;
