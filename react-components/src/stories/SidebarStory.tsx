import Sidebar from "@/components/Sidebar/Sidebar";
import { SidebarItem } from "@/components/Sidebar/SidebarItem";
import View from "@/components/View/View";
import {
  HomeIcon,
  SettingsIcon,
  UserIcon,
  FileTextIcon,
  BarChartIcon,
} from "lucide-react";

export default function SidebarStory() {
  return (
    <div className="flex flex-col sm:flex-row sm:min-h-screen">
      <Sidebar isAuthenticated={true} username="Hans">
        <SidebarItem icon={<HomeIcon />} name="Dashboard" link="/" />
        <SidebarItem
          icon={<FileTextIcon />}
          name="Documents"
          link="/documents"
        />
        <SidebarItem
          icon={<BarChartIcon />}
          name="Analytics"
          link="/analytics"
        />
        <SidebarItem icon={<UserIcon />} name="Profile" link="/profile" />
        <SidebarItem icon={<SettingsIcon />} name="Settings" link="/settings" />
      </Sidebar>
      <View title="Hallo">
        <p>Test</p>
      </View>
    </div>
  );
}
