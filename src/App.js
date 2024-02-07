import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantDetail from "./components/RestaurantDetail";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/restaurantdetail/:id" element={<RestaurantDetail />} />
        <Route path="/test" element={<Test />}/>
      </Routes>
    </div>
  );
}

export default App;
