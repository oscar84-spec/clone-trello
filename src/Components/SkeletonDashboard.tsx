import "../assets/styles/dashboard.css";

const SkeletonDashboard = () => {
  return (
    <main className="w-full h-screen bg-dashboard-page-bg animate-pulse">
      <header className="w-full h-14 px-5 bg-dashboard-header-bg flex justify-between items-center lg:px-10  xl:px-20 animate-pulse">
        <div className="flex items-center gap-5 lg:gap-10">
          <div className="w-30 rounded-md bg-dashboard-header-icon/50 h-8 animate-pulse"></div>
          <div className="w-60 rounded-md bg-dashboard-header-icon/50 h-8 animate-pulse hidden md:flex"></div>
        </div>
        <div className="flex items-center gap-3 animate-pulse">
          <div className="h-8 px-5 rounded-md bg-dashboard-header-icon/50 animate-pulse"></div>
          <div className="h-8 px-5 rounded-md bg-dashboard-header-icon/50 animate-pulse"></div>
        </div>
      </header>
      <section className="w-full h-[calc(100vh-56px)] p-5 bg-dashboard-page-bg dashboard">
        <aside className="w-full h-full rounded-md bg-dashboard-sidebar-bg animate-pulse sidebar"></aside>
        <div className="w-full h-full rounded-md bg-dashboard-kanban-bg main"></div>
      </section>
    </main>
  );
};

export default SkeletonDashboard;
