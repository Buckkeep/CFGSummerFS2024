import Student from "./Student";

function App() {

  return(
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={54} isStudent={false}/>
      <Student name="Sandy" age={24} isStudent={true}/>
      <Student />
    </>
  );
}

export default App
