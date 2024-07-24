import UserGreeting from "./UserGreeting";

function App() {

  return(
    <>
      <UserGreeting isLoggedIn={true} username="Buckkeep"/>
      <UserGreeting isLoggedIn={false} username="Buckkeep"/>
    </>
  );
}

export default App
