import { Link, useNavigate } from "react-router-dom";

const DashboardTile = ({ title, desc, link, label }) => (
  <div style={styles.tile}>
    <h4>{title}</h4>
    <p>{desc}</p>
    <Link to={link} style={styles.link}>
      {label}
    </Link>
  </div>
);

export default DashboardTile;

const styles = {
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
