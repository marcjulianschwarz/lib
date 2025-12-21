import RegisterView from "@/views/RegisterView";

export default function RegisterViewStory() {
  return (
    <RegisterView
      register={(username, email, password) => {
        console.log("Register attempt:", { username, email, password });
        return Promise.resolve({
          success: true,
          error: "",
        });
      }}
    />
  );
}
