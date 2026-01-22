import { useEffect, useState, useMemo, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Zap,
  Target,
  Clock,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

import {
  getDailyAnalytics,
  getMonthlyAnalytics,
  getAnalyticsSummary,
} from "../../../../api/adminAnalytics.api";

const Static = () => {
  const [summary, setSummary] = useState(null);
  const [dailyData, setDailyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fetchDashboardData = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setError(null);

      const [summaryRes, dailyRes, monthlyRes] = await Promise.all([
        getAnalyticsSummary(),
        getDailyAnalytics(),
        getMonthlyAnalytics(),
      ]);

      // Handle API response structure
      setSummary(summaryRes.data?.data || summaryRes.data || {});
      setDailyData(dailyRes.data?.data || dailyRes.data || []);
      setMonthlyData(monthlyRes.data?.data || monthlyRes.data || []);
    } catch (err) {
      setError(err.message || "Failed to load analytics data");
      console.error("Dashboard analytics error:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();
    
    // Auto-refresh every 30 seconds for real-time feel
    const interval = setInterval(fetchDashboardData, 30000);
    return () => clearInterval(interval);
  }, [fetchDashboardData]);

  // Memoized calculations with safety checks
  const last7Days = useMemo(() => {
    if (!Array.isArray(dailyData) || dailyData.length === 0) return [];
    
    const last7 = dailyData.slice(-7);
    return last7.map((item, index) => ({
      date: item.date ? new Date(item.date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
      }) : `Day ${index + 1}`,
      value: item.count || item.value || 0,
      fullDate: item.date || new Date().toISOString()
    }));
  }, [dailyData]);

  const weekTotal = useMemo(() => 
    last7Days.reduce((sum, day) => sum + day.value, 0),
    [last7Days]
  );

  const weeklyAverage = useMemo(() => 
    last7Days.length > 0 ? Math.round(weekTotal / last7Days.length) : 0,
    [weekTotal, last7Days.length]
  );

  const peakDay = useMemo(() => {
    if (last7Days.length === 0) return null;
    return last7Days.reduce((max, day) => 
      day.value > max.value ? day : max
    , last7Days[0]);
  }, [last7Days]);

  const previousWeekTotal = useMemo(() => {
    if (!Array.isArray(dailyData) || dailyData.length < 14) return 0;
    const previousWeek = dailyData.slice(-14, -7);
    return previousWeek.reduce((sum, day) => sum + (day.count || 0), 0);
  }, [dailyData]);

  const weeklyGrowth = useMemo(() => {
    if (previousWeekTotal === 0) return 0;
    return (((weekTotal - previousWeekTotal) / previousWeekTotal) * 100).toFixed(1);
  }, [weekTotal, previousWeekTotal]);

  const todayVsYesterday = useMemo(() => {
    if (!summary?.yesterday || summary.yesterday === 0) return 0;
    return ((((summary.today || 0) - summary.yesterday) / summary.yesterday) * 100).toFixed(1);
  }, [summary]);

  const consistencyScore = useMemo(() => {
    if (last7Days.length < 2) return 0;
    const values = last7Days.map(d => d.value);
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
    const stdDev = Math.sqrt(variance);
    const coefficient = (stdDev / mean) * 100;
    return Math.max(0, Math.min(100, 100 - coefficient)).toFixed(0);
  }, [last7Days]);

  const formattedMonthly = useMemo(() => {
    if (!Array.isArray(monthlyData)) return [];
    
    return monthlyData.map((item) => ({
      month: item.month ? item.month.substring(0, 3) : 'Month',
      count: item.count || item.value || 0
    }));
  }, [monthlyData]);

  const bgClass = darkMode ? "bg-gray-900" : "bg-gray-50";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const textPrimary = darkMode ? "text-gray-100" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-500";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-200";

  if (loading) {
    return <LoadingSkeleton darkMode={darkMode} />;
  }

  if (error) {
    return <ErrorState error={error} onRetry={() => fetchDashboardData()} darkMode={darkMode} />;
  }

  if (!summary || dailyData.length === 0) {
    return <EmptyState darkMode={darkMode} />;
  }

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      <div className="h-4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className={`text-2xl sm:text-3xl font-bold ${textPrimary} tracking-tight`}>
                Analytics Dashboard
              </h1>
              <p className={`${textSecondary} text-sm mt-1`}>
                Real-time performance insights and metrics
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 ${cardBg} border ${borderColor} rounded-lg hover:scale-105 transition-transform`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? "🌞" : "🌙"}
              </button>
              <button
                onClick={() => fetchDashboardData(true)}
                disabled={refreshing}
                className={`inline-flex items-center gap-2 px-4 py-2.5 ${cardBg} border ${borderColor} rounded-lg text-sm font-medium ${textPrimary} hover:shadow-md transition-all ${refreshing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
              >
                <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
                <span className="hidden sm:inline">Refresh</span>
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
          <MetricCard
            title="Today's Contacts"
            value={summary?.today || 0}
            change={todayVsYesterday}
            icon={<Activity size={20} />}
            gradient="from-blue-500 to-blue-600"
            darkMode={darkMode}
          />
          <MetricCard
            title="This Week"
            value={weekTotal}
            change={weeklyGrowth}
            icon={<Zap size={20} />}
            gradient="from-green-500 to-emerald-600"
            darkMode={darkMode}
          />
          <MetricCard
            title="Daily Average"
            value={weeklyAverage}
            subtitle="Last 7 days"
            icon={<Target size={20} />}
            gradient="from-purple-500 to-purple-600"
            darkMode={darkMode}
          />
          <MetricCard
            title="Peak Day"
            value={peakDay?.value || 0}
            subtitle={peakDay?.date || "N/A"}
            icon={<Clock size={20} />}
            gradient="from-orange-500 to-red-500"
            darkMode={darkMode}
          />
        </div>

        {/* Charts Section */}
        <div className="space-y-6 sm:space-y-8">
          {/* Trend Chart */}
          <div className={`${cardBg} rounded-2xl border ${borderColor} overflow-hidden shadow-sm hover:shadow-lg transition-shadow`}>
            <div className="px-4 sm:px-6 py-4 border-b border-gray-700/10">
              <h2 className={`text-lg font-semibold ${textPrimary}`}>
                7-Day Trend
              </h2>
              <p className={`${textSecondary} text-sm mt-0.5`}>
                Daily contact volume
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={last7Days}>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#f3f4f6"} vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: darkMode ? '#9ca3af' : '#6b7280', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: darkMode ? '#9ca3af' : '#6b7280', fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? '#1f2937' : 'white',
                      border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                      borderRadius: '12px',
                      padding: '12px',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
                    }}
                    labelStyle={{ fontWeight: 600, color: darkMode ? '#f3f4f6' : '#111827' }}
                    formatter={(value) => [`${value} contacts`, '']}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    fill="url(#colorGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Monthly Chart */}
            <div className={`lg:col-span-2 ${cardBg} rounded-2xl border ${borderColor} p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow`}>
              <h3 className={`text-lg font-semibold ${textPrimary} mb-4 sm:mb-6`}>
                Monthly Overview
              </h3>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={formattedMonthly}>
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#f3f4f6"} vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: darkMode ? '#9ca3af' : '#6b7280', fontSize: 11 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: darkMode ? '#9ca3af' : '#6b7280', fontSize: 11 }}
                    width={35}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? '#1f2937' : 'white',
                      border: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                      borderRadius: '12px',
                      padding: '12px',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
                    }}
                    formatter={(value) => [`${value} contacts`, '']}
                  />
                  <Bar
                    dataKey="count"
                    radius={[8, 8, 0, 0]}
                  >
                    {formattedMonthly.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={`hsl(${220 + index * 10}, 70%, ${50 + (index % 3) * 5}%)`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Insights */}
            <div className={`${cardBg} rounded-2xl border ${borderColor} p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow`}>
              <h3 className={`text-lg font-semibold ${textPrimary} mb-4 sm:mb-6`}>
                Key Insights
              </h3>
              <div className="space-y-4">
                <InsightCard
                  title="Peak Activity"
                  value={peakDay?.value || 0}
                  subtitle={peakDay?.date || "No data"}
                  icon={<TrendingUp size={16} />}
                  color="green"
                  darkMode={darkMode}
                />
                <InsightCard
                  title="Weekly Growth"
                  value={`${weeklyGrowth >= 0 ? '+' : ''}${weeklyGrowth}%`}
                  subtitle="vs last week"
                  icon={weeklyGrowth >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  color={weeklyGrowth >= 0 ? "green" : "red"}
                  darkMode={darkMode}
                />
                <InsightCard
                  title="Consistency"
                  value={`${consistencyScore}%`}
                  subtitle="stability score"
                  icon={<Target size={16} />}
                  color="purple"
                  darkMode={darkMode}
                />
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className={`${cardBg} rounded-2xl border ${borderColor} p-4 sm:p-6 shadow-sm`}>
            <h3 className={`text-lg font-semibold ${textPrimary} mb-4 sm:mb-6`}>
              Summary Statistics
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatBox 
                label="Total Contacts" 
                value={(summary?.total || 0).toLocaleString()} 
                darkMode={darkMode} 
              />
              <StatBox 
                label="Weekly Avg" 
                value={weeklyAverage} 
                darkMode={darkMode} 
              />
              <StatBox 
                label="Growth Rate" 
                value={`${weeklyGrowth}%`} 
                darkMode={darkMode} 
              />
              <StatBox 
                label="Peak Value" 
                value={peakDay?.value || 0} 
                darkMode={darkMode} 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-8"></div>
    </div>
  );
};

// Components
const LoadingSkeleton = ({ darkMode }) => {
  const bgClass = darkMode ? "bg-gray-900" : "bg-gray-50";
  const shimmer = darkMode ? "bg-gray-800" : "bg-gray-200";
  
  return (
    <div className={`min-h-screen ${bgClass}`}>
      <div className="h-4"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className={`h-8 w-48 ${shimmer} rounded mb-8`}></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`h-32 ${shimmer} rounded-2xl`}></div>
            ))}
          </div>
          <div className={`h-96 ${shimmer} rounded-2xl mb-8`}></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-2 h-64 ${shimmer} rounded-2xl`}></div>
            <div className={`h-64 ${shimmer} rounded-2xl`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ErrorState = ({ error, onRetry, darkMode }) => {
  const bgClass = darkMode ? "bg-gray-900" : "bg-gray-50";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const textPrimary = darkMode ? "text-gray-100" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-500";
  
  return (
    <div className={`min-h-screen ${bgClass} flex items-center justify-center p-4`}>
      <div className={`${cardBg} rounded-2xl border border-red-200 p-8 max-w-md w-full text-center shadow-xl`}>
        <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
        <h2 className={`text-xl font-bold ${textPrimary} mb-2`}>
          Failed to Load Data
        </h2>
        <p className={`${textSecondary} mb-6`}>
          {error}
        </p>
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors hover:scale-105 transform"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

const EmptyState = ({ darkMode }) => {
  const bgClass = darkMode ? "bg-gray-900" : "bg-gray-50";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const textPrimary = darkMode ? "text-gray-100" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-500";
  
  return (
    <div className={`min-h-screen ${bgClass} flex items-center justify-center p-4`}>
      <div className={`${cardBg} rounded-2xl p-8 max-w-md w-full text-center shadow-xl`}>
        <div className="text-6xl mb-4">📊</div>
        <h2 className={`text-xl font-bold ${textPrimary} mb-2`}>
          No Data Available
        </h2>
        <p className={`${textSecondary}`}>
          Analytics data will appear here once available
        </p>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, change, subtitle, icon, gradient, darkMode }) => {
  const isPositive = change >= 0;
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const textPrimary = darkMode ? "text-gray-100" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-600";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-200";
  
  return (
    <div className={`${cardBg} border ${borderColor} rounded-2xl p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group`}>
      <div className="flex items-start justify-between mb-3">
        <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
          <div className="text-white">{icon}</div>
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${isPositive ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            <span className="text-xs font-semibold">{change}%</span>
          </div>
        )}
      </div>
      <h3 className={`text-sm font-medium ${textSecondary} mb-1`}>{title}</h3>
      <div className={`text-3xl font-bold ${textPrimary}`}>{value.toLocaleString()}</div>
      {subtitle && (
        <p className={`text-xs ${textSecondary} mt-2`}>{subtitle}</p>
      )}
    </div>
  );
};

const InsightCard = ({ title, value, subtitle, icon, color, darkMode }) => {
  const colorMap = {
    green: darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-600',
    blue: darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600',
    purple: darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-50 text-purple-600',
    red: darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-50 text-red-600',
  };
  
  const borderColor = darkMode ? "border-gray-700" : "border-gray-100";
  const hoverBg = darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50";
  const textPrimary = darkMode ? "text-gray-100" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-500";
  
  return (
    <div className={`flex items-center justify-between p-4 border ${borderColor} rounded-xl ${hoverBg} transition-all hover:scale-[1.02]`}>
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-lg ${colorMap[color]}`}>
          {icon}
        </div>
        <div>
          <h4 className={`text-sm font-semibold ${textPrimary}`}>{title}</h4>
          <p className={`text-xs ${textSecondary}`}>{subtitle}</p>
        </div>
      </div>
      <span className={`text-lg font-bold ${textPrimary}`}>{value}</span>
    </div>
  );
};

const StatBox = ({ label, value, darkMode }) => {
  const textPrimary = darkMode ? "text-gray-100" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-500";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-100";
  
  return (
    <div className={`text-center p-4 border ${borderColor} rounded-xl hover:shadow-md transition-shadow`}>
      <div className={`text-2xl sm:text-3xl font-bold ${textPrimary} mb-1`}>
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      <div className={`text-xs ${textSecondary}`}>{label}</div>
    </div>
  );
};

export default Static;