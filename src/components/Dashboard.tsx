import "../Styles/DashboardStyles.css";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-item">
        <span>IP ADDRESS</span>
        <h2>191.212.174.101</h2>
      </div>
      <span>
        <hr />
      </span>
      <div className="dashboard-item">
        <span>LOCATION</span>
        <h2>Brooklyn, NY 10001</h2>
      </div>
      <span>
        <hr />
      </span>
      <div className="dashboard-item">
        <span>TIMEZONE</span>
        <h2>UTC -05:00</h2>
      </div>
      <span>
        <hr />
      </span>
      <div className="dashboard-item">
        <span>ISP</span>
        <h2>SpaceX Starlink</h2>
      </div>
    </div>
  );
};

export default Dashboard;
