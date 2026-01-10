const PageLoader = () => {
    return (
      <div className="min-h-screen w-full bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          {/* Logo / Brand */}
          <div className="text-white text-2xl font-semibold tracking-wide">
            appsixer
          </div>
  
          {/* Skeleton bar */}
          <div className="w-48 h-1 bg-white/20 overflow-hidden rounded">
            <div className="h-full w-1/3 bg-white animate-pulse" />
          </div>
        </div>
      </div>
    );
  };
  
  export default PageLoader;
  