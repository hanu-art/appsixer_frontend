import { useState, useEffect } from "react";
import { getContactsStats } from "../../../../api/counter.api";
import StatsChart from "./StatsChart";

const DashboardStats = () => {
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await getContactsStats();

      if (response.success) {
        setStatsData(response.data);
      }
    } catch (err) {
      setError(err.message);
      setStatsData({
        total: 0,
        new: 0,
        contacted: 0,
        resolved: 0,
      });
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- LOADING STATE ---------------- */
  if (loading) {
    return (
      <div className="space-y-6 pb-12">
        <div className="bg-white rounded-xl p-6 border border-gray-200 animate-pulse">
          <div className="h-6 w-48 bg-gray-200 rounded mb-4" />
          <div className="h-56 bg-gray-200 rounded" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 border border-gray-200 animate-pulse"
            >
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="mt-3 h-7 w-14 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ---------------- ERROR STATE ---------------- */
  if (error) {
    return (
      <div className="text-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-600">
          Stats temporarily unavailable
        </p>
      </div>
    );
  }

  const statsCards = [
    { label: "Total Inquiries", value: statsData.total },
    { label: "New", value: statsData.new },
    { label: "Contacted", value: statsData.contacted },
    { label: "Resolved", value: statsData.resolved },
  ];

  /* ---------------- MAIN UI ---------------- */
  return (
    <div className="space-y-8 pb-12">
      {/* CHART */}
      <StatsChart data={statsData} />

      {/* STATS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {statsCards.map((item, index) => (
          <div
            key={index}
            className="
              bg-white p-5 border border-gray-200 rounded-xl
              shadow-sm hover:shadow-md transition-shadow
            "
          >
            <p className="text-sm text-gray-500">
              {item.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
