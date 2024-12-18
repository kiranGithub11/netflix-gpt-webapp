import { Route, Routes } from "react-router";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/browse" element={<Browse />}></Route>
    </Routes>
  );
};
export default Body;
