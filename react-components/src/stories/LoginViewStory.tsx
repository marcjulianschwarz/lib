import LoginView from "@/views/LoginView";

export default function LoginViewStory() {
  return (
    <LoginView
      title="Login"
      login={(username, password) => {
        console.log("Login attempt:", { username, password });
        return Promise.resolve({
          success: true,
          error: "",
        });
      }}
    />
  );
}
