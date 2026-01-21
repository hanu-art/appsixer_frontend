import { getContactsStats } from "../../../../api/counter.api";
import { useState, useEffect } from 'react';

const DashboardStats = () => {
  const [stats, setStats] = useState(null);
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
        // API response format ke hisab se map karo
        const apiStats = [
          { label: "Total Inquiries", value: response.data.total || 0, color: "gray" },
          { label: "New", value: response.data.new || 0, color: "blue" },
          { label: "Contacted", value: response.data.contacted || 0, color: "yellow" },
          { label: "Resolved", value: response.data.resolved || 0, color: "green" },
        ];
        setStats(apiStats);
      }
    } catch (err) {
      setError(err.message);
      // Fallback to static data if API fails
      const fallbackStats = [
        { label: "Total Inquiries", value: 0, color: "gray" },
        { label: "New", value: 0, color: "blue" },
        { label: "Contacted", value: 0, color: "yellow" },
        { label: "Resolved", value: 0, color: "green" },
      ];
      setStats(fallbackStats);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg p-5 border border-gray-200 animate-pulse">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="mt-2 h-8 w-12 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Error loading stats: {error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((item, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg p-5 border border-gray-200 hover:border-gray-300 transition-colors"
        >
          <p className="text-sm text-gray-600 font-medium">{item.label}</p>
          <p className="mt-2 text-2xl font-normal text-gray-800">
            {item.value}
          </p>
          <div className={`mt-3 h-1 w-12 rounded-full bg-${item.color}-100`}></div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;