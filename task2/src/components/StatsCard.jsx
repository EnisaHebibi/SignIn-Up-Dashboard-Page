const StatsCard = ({ title, value }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
