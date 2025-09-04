import AppSidebar from "./components/sidebar";
import Header from "./components/header";
import AppShirt from "./pages/shirt";
import { Route, Routes } from "react-router-dom";
import AppEstate from "./pages/estate";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {" "}
        {/* Sidebar */}
        <div className="col-2 bg-dark text-white vh-100">
          <AppSidebar />
        </div>
        {/* Main Content */}
        <div className="col-10 d-flex flex-column">
          {/* Header */}
          <Header />

          {/* Body */}
          <div className="p-3">
            <Routes>
              <Route path="/shirt" element={<AppShirt />} />
              <Route path="/estate" element={<AppEstate />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
