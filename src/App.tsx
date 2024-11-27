import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "../src/components/layout/DefaultLayout";
import FloodPrediction from "./components/pages/Dashboard/ECommerce"; // Example page, replace with your actual page component

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout children={<FloodPrediction />} />} />
      </Routes>
    </Router>
  );
}
