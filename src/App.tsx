import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Stack } from "@mui/material";

function App() {
  return (
    <>
      <Stack spacing={2}>
          <Header />
          <Outlet></Outlet>
      </Stack>
    </>
  );
}

export default App;
