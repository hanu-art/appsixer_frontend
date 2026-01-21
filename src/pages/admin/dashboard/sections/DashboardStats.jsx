const DashboardStats = () => {
    const inquiries = [
      { status: "new" },
      { status: "new" },
      { status: "in_progress" },
      { status: "replied" },
      { status: "closed" },
    ];
  
    const total = inquiries.length;
    const newCount = inquiries.filter(i => i.status === "new").length;
    const inProgress = inquiries.filter(i => i.status === "in_progress").length;
    const replied = inquiries.filter(i => i.status === "replied").length;
  
    const stats = [
      { label: "Total Inquiries", value: total },
      { label: "New", value: newCount },
      { label: "In Progress", value: inProgress },
      { label: "Replied", value: replied },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default DashboardStats;
  