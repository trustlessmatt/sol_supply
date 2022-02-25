import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";

const SideBar = () => {
  return (
    <div>
      <SideBarIcon icon={<FaTwitter size="28" />} />
      <SideBarIcon icon={<FaDiscord size="28" />} />
      <SideBarIcon icon={<FaGithub size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon }) => (
  <div>{ icon }</div>
);

export default SideBar;