import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HtmlList from "./pages/HtmlList";
import JavaScriptList from "./pages/JavaScriptList";
import ReactList from "./pages/ReactList";
import ReduxList from "./pages/ReduxList";
import PythonList from "./pages/Python";
import InterviewQuestions from "./pages/InterviewQuestions";
import SystemDesign from "./pages/SystemDesign";
import TypeScript from "./pages/TypeScript";
import Java from "./pages/Java"
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Box } from "@mui/material";

function App() {
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
          <Route path="/interviewQuestions" element={<InterviewQuestions />} />
          <Route path="/systemDesign" element={<SystemDesign />} />
          <Route path="/typeScript" element={<TypeScript />} />
          <Route path="/java" element={<Java />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
