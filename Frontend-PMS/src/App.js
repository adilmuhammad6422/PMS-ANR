import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./users/AddProduct";   // Updated path and name
import EditProduct from "./users/EditProduct"; // Updated path and name
import ViewProduct from "./users/ViewProduct"; // Updated path and name

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addproduct" element={<AddProduct />} />  {/* Updated path */}
          <Route exact path="/editproduct/:id" element={<EditProduct />} />  {/* Updated path */}
          <Route exact path="/viewproduct/:id" element={<ViewProduct />} />  {/* Updated path */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
