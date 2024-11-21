import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>루트 화면</h1>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;