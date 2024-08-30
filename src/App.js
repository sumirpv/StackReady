import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HtmlList from "./pages/HtmlList";
import JavaScriptList from "./pages/JavaScriptList";
import ReactList from "./pages/ReactList";

function App() {
  console.log("Page app");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<HtmlList />} />
        <Route path="/two" element={<JavaScriptList />} />
        <Route path="/three" element={<ReactList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
