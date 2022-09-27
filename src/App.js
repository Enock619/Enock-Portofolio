import Homepage from "./Pages/Homepage";
import GlobalStyle from "./Components/GlobalStyle";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div>
      <GlobalStyle />

      <Routes>
        <Route path="/" exact element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
