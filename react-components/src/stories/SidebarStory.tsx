import Sidebar from "@/components/Sidebar/Sidebar";
import { SidebarItem } from "@/components/Sidebar/SidebarItem";
import View from "@/components/View/View";
import { HomeIcon } from "lucide-react";

export default function SidebarStory() {
  return (
    <div className="flex flex-col sm:flex-row sm:min-h-screen">
      <Sidebar isAuthenticated={true} username="Hans">
        <SidebarItem icon={<HomeIcon />} name="home" link="/" />
        <SidebarItem icon={<HomeIcon />} name="home" link="/" />
        <SidebarItem icon={<HomeIcon />} name="home" link="/" />
      </Sidebar>
      <View title="Hallo">
        <p>Test</p>
      </View>
    </div>
  );
}
