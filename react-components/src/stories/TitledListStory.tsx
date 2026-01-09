import TitledList from "@/components/TitledList/TitledList";
import { Star, Trash2 } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
}

export default function TitledListStory() {
  const users: User[] = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Carol Davis", email: "carol@example.com" },
  ];

  const projects: Project[] = [
    {
      id: "proj-1",
      title: "Website Redesign",
      description: "Complete overhaul of company website",
    },
    {
      id: "proj-2",
      title: "Mobile App",
      description: "iOS and Android application",
    },
  ];

  const singleUser: User[] = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          Basic list with click handler
        </h3>
        <TitledList
          items={users}
          title="Users"
          singularTitle="User"
          getTitle={(user) => user.name}
          getSubtitle={(user) => user.email}
          getId={(user) => user.id}
          onItemClick={(user) => alert(`Clicked: ${user.name}`)}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          List with action button
        </h3>
        <TitledList
          items={projects}
          title="Projects"
          singularTitle="Project"
          getTitle={(project) => project.title}
          getSubtitle={(project) => project.description}
          getId={(project) => project.id}
          onItemClick={(project) => alert(`Viewing: ${project.title}`)}
          onActionClick={(project) => alert(`Starring: ${project.title}`)}
          actionIcon={Star}
          actionLabel="Star project"
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          Single item (singular title)
        </h3>
        <TitledList
          items={singleUser}
          title="Users"
          singularTitle="User"
          getTitle={(user) => user.name}
          getSubtitle={(user) => user.email}
          getId={(user) => user.id}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">Empty state</h3>
        <TitledList
          items={[]}
          title="Tasks"
          singularTitle="Task"
          getTitle={(item: unknown) => ""}
          getId={(item: unknown) => ""}
          emptyState={
            <div className="px-4 py-8 text-center text-gray-500">
              <p>No tasks found</p>
              <p className="text-sm mt-1">
                Create your first task to get started
              </p>
            </div>
          }
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          Custom action icon (delete)
        </h3>
        <TitledList
          items={users}
          title="Users"
          singularTitle="User"
          getTitle={(user) => user.name}
          getSubtitle={(user) => user.email}
          getId={(user) => user.id}
          onActionClick={(user) => alert(`Deleting: ${user.name}`)}
          actionIcon={Trash2}
          actionLabel="Delete user"
        />
      </div>
    </div>
  );
}
