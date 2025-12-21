import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import Expander from "@/components/Expander/Expander";
import Input from "@/components/Input/Input";
import SearchBar from "@/components/SearchBar/SearchBar";
import UploadArea from "@/components/UploadArea/UploadArea";
import ExternalUrlStory from "@/stories/ExternalUrlStory";

import ModalStory from "@/stories/ModalStory";
import TableStory from "@/stories/TableStory";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";

export default function HomePage() {
  return (
    <div className="w-8/12 m-auto mt-20">
      <h1 className="text-4xl mb-10!">Components</h1>
      <div className="flex flex-col gap-10">
        <Badge text="This is a red badge" color="red" />
        <Expander title="Expand this text">
          <p>This is some hidden text</p>
        </Expander>
        <Button className="w-fit">Click this</Button>
        <Input placeholder="Enter some text" />
        <SearchBar placeholder="Search" />
        <ExternalUrlStory />
        <TableStory />
        <ModalStory />
        <UploadArea onFilesChanged={() => {}} />
      </div>
      <h1 className="text-4xl mb-10! mt-20!">Views</h1>
      <div className="flex flex-col gap-10">
        <LoginView
          title="Login"
          login={(username, password) => {
            void username;
            void password;
            return Promise.resolve({
              success: true,
              error: "",
            });
          }}
        />
        <RegisterView
          register={(username, email, password) => {
            void username;
            void password;
            void email;
            return Promise.resolve({
              success: true,
              error: "",
            });
          }}
        />
      </div>
    </div>
  );
}
