import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import UploadPage from "./page/UploadPage";
import DetailPage from "./page/DetailPage";
import UpdatePage from "./page/UpdatePage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/upload"} element={<UploadPage />} />
      <Route path={"/product/:id"} element={<DetailPage />} />
      <Route path={"/update/:id"} element={<UpdatePage />} />
    </Routes>
  );
}

export default App;
