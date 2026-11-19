
function Sidebar({ activePage, setActivePage }) {
  const pages = [
    'Dashboard',
    'Projects',
    'Tasks',
    'Team',
    'Settings'
  ];

  return (
    <aside className="sidebar">
      <h2>WorkFlow.</h2>

      <nav>
        {pages.map((page) => (
          <p
            key={page}
            onClick={() => setActivePage(page)}
            className={activePage === page ? 'active' : ''}
          >
            {page}
          </p>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
