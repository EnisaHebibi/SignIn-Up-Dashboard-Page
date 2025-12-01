const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>
      <ul className="space-y-4">
        <li>Home</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
