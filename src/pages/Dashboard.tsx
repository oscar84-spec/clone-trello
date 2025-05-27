import { Header, Button, SectionKanban } from "../Components";
import { dashLinks } from "../mockData/dashboard";
import { AddIcon, AccountIcon } from "../assets/icons";

const Dashboard = () => {
  return (
    <main className="w-full h-screen bg-dashboard-page-bg">
      <Header navLinks={dashLinks} styles="bg-dashboard-header-bg static">
        <div className="flex items-center gap-3">
          <Button
            type="button"
            styles="bg-dashboard-btn-primary-bg h-8 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-primary-hover"
          >
            <AddIcon styles="text-dashboard-btn-primary-text size-5" />
          </Button>
          <Button
            type="button"
            styles="bg-dashboard-btn-secondary-bg h-8 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-secondary-hover"
          >
            <AccountIcon styles="text-dashboard-btn-secondary-text size-5" />
          </Button>
        </div>
      </Header>
      <SectionKanban />
    </main>
  );
};

export default Dashboard;
