import "../assets/styles/kanban.css";

const SkeletonKanban = () => {
  return (
    <section className="w-full h-full bg-dashboard-kanban-bg rounded-md p-2 animate-pulse">
      <div className="flex items-center justify-between px-2">
        <h3 className="w-32 h-5 rounded-md bg-dashboard-header-icon/50 animate-pulse "></h3>
        <div className="flex  gap-2 items-center">
          <div className="w-24 px-x h-5 rounded-md bg-dashboard-header-icon/50 animate-pulse"></div>
          <div className="w-8 px-x h-5 rounded-md bg-dashboard-header-icon/50 animate-pulse"></div>
        </div>
      </div>
      <div className="w-full h-full p-2 flex gap-5 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-full h-full shrink-0 rounded-md p-2 bg-dashboard-list-bg md:w-72 lista-container animate-pulse"
          >
            <div className="w-full flex justify-between items-center gap-2 nombre">
              <h3 className="h-5 w-16 rounded-md bg-dashboard-header-icon/50"></h3>
              <div></div>
            </div>
            <div className="scroll overflow-y-auto lista flex flex-col gap-2"></div>
            <div className="w-full h-7 rounded-md bg-dashboard-header-icon/50 button-add"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkeletonKanban;
