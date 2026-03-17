const DashboardHeader = () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "Good morning"
      : hour < 18
      ? "Good afternoon"
      : "Good evening";

  return (
    <div className="mb-8 flex items-center justify-between">
      
      {/* LEFT */}
      <div className="flex items-center gap-5">
        
        {/* LOGO – BIG & CONFIDENT */}
        <div className="h-16 w-60 rounded-xl border border-gray-50 bg-white flex items-center justify-center shadow-sm">
          <img
            src="/logo/logo.png"
            alt="AppSixer Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* TEXT */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-600 tracking-tight">
            {greeting},{" "}
            <span className="font-semibold text-[#007bff]">
              Admin
            </span>
          </h1>

          <p className="mt-1 text-sm font-medium text-gray-500">
            Control panel for managing platform activity
          </p>
        </div>
      </div>

      {/* RIGHT */}
        {/* RIGHT */}
<div className="hidden md:flex items-center gap-3">
  <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 border border-green-200">
    <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
    System Online
  </span>
</div>

    </div>
  );
};

export default DashboardHeader;
