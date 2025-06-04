import {
  Header,
  Button,
  SectionKanban,
  AddBoard,
  AddList,
  AddCard,
  MenuAccount,
  DeleteBoard,
  DeleteList,
  DeleteCard,
} from "../Components";
import { dashLinks } from "../mockData/dashboard";
import { AddIcon, AccountIcon } from "../assets/icons";
import { useOpenModal } from "../store/slices/UI";
import { useOpenModalMenuAccount } from "../store/slices/UI";

const Dashboard = () => {
  const { toggle } = useOpenModal();
  const { handleToggle } = useOpenModalMenuAccount();
  return (
    <main className="w-full h-screen bg-dashboard-page-bg">
      <Header
        navLinks={dashLinks}
        styles="bg-dashboard-header-bg relative"
        pathLogo="/dashboard"
      >
        <div className="flex items-center gap-3">
          <Button
            type="button"
            styles="bg-dashboard-btn-primary-bg h-8 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-primary-hover"
            onClick={toggle}
          >
            <AddIcon styles="text-dashboard-btn-primary-text size-5" />
          </Button>
          <Button
            type="button"
            styles="bg-dashboard-btn-secondary-bg h-8 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-dashboard-btn-secondary-hover"
            onClick={handleToggle}
          >
            <AccountIcon styles="text-dashboard-btn-secondary-text size-5" />
          </Button>
        </div>
        <MenuAccount />
      </Header>
      <AddBoard />
      <AddList />
      <AddCard />
      <DeleteBoard />
      <DeleteList />
      <DeleteCard />
      <SectionKanban />
    </main>
  );
};

export default Dashboard;
