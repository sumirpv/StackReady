import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HtmlList from "./pages/HtmlList";
import JavaScriptList from "./pages/JavaScriptList";
import ReactList from "./pages/ReactList";
import ReduxList from "./pages/ReduxList";
import PythonList from "./pages/Python";
import { Box } from "@mui/material";

function App() {
  console.log("Page app");
  return (
    <>
      <Header />
      <Box sx={{ minHeight: "calc(100vh - 60px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/htmlList" element={<HtmlList />} />
          <Route path="/javaScriptList" element={<JavaScriptList />} />
          <Route path="/reactList" element={<ReactList />} />
          <Route path="/reduxList" element={<ReduxList />} />
          <Route path="/pythonList" element={<PythonList />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
