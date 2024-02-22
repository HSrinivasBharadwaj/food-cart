import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantDetail from "./components/RestaurantDetail";
import CartPage from "./components/CartPage";
import SuccessPage from "./components/SuccessPage";
import { lazy, Suspense, useState } from "react";

const About = lazy(() => import("./components/About"));
const Help = lazy(() => import("./components/Help"));

function App() {
  const [darkMode, setDarkMode] = useState(false); 
  return (
    <div className={`App ${darkMode ? 'bg-black text-white' : "bg-white text-black"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/restaurantdetail/:id" element={<RestaurantDetail />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/help"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Help />
            </Suspense>
          }
        />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/successpage" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
