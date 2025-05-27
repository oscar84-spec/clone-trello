import { SidebarDash, KanbanContent } from "./index";
import "../assets/styles/dashboard.css";

const SectionKanban = () => {
  return (
    <section className="w-full h-[calc(100vh-56px)] p-5 dashboard ">
      <SidebarDash areas="sidebar" />
      <KanbanContent areas="main" />
    </section>
  );
};

export default SectionKanban;
