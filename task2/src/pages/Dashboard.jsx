import DashboardLayout from "../components/DashboardLayout";
import StatsCard from "../components/StatsCard";
import SalesChart from "../components/SalesChart";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatsCard title="Users" value="1200" />
        <StatsCard title="Revenue" value="$45,000" />
        <StatsCard title="Orders" value="320" />
      </div>

      <SalesChart />
    </DashboardLayout>
  );
};

export default Dashboard;
