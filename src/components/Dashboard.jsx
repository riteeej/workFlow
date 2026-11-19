function Dashboard() {
  return (
    <main className="main-content">
      <header>
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your overview.</p>
      </header>

      <section className="stats">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <h2>12</h2>
        </div>

        <div className="stat-card">
          <h3>Active Tasks</h3>
          <h2>24</h2>
        </div>

        <div className="stat-card">
          <h3>Completed Tasks</h3>
          <h2>48</h2>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;