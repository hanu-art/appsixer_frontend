import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const StatsChart = ({ data }) => {
  const chartData = [
    { name: "New", value: data.new || 0, color: "#3B82F6" },
    { name: "Contacted", value: data.contacted || 0, color: "#F59E0B" },
    { name: "Resolved", value: data.resolved || 0, color: "#10B981" },
  ];

  const total = data.total || 0;

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Inquiries Distribution
      </h3>

      {/* CHART */}
      <div className="w-full">
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* SUMMARY (BELOW CHART) */}
      <div className="mt-6 space-y-3">
        {chartData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>

            <span className="text-sm font-medium text-gray-900">
              {item.value}
              {total > 0 && (
                <span className="text-gray-400 ml-1">
                  ({Math.round((item.value / total) * 100)}%)
                </span>
              )}
            </span>
          </div>
        ))}

        <div className="pt-3 border-t border-gray-200 flex justify-between">
          <span className="text-sm font-medium text-gray-700">Total</span>
          <span className="text-sm font-semibold text-gray-900">
            {total}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsChart;
