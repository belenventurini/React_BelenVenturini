import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import  Home from "../pages/Home"
import Category from "../pages/Category";
import ItemDetails from "../pages/ItemDetails";

const MainRouter = () => {
    return (
    <Router>  
        <NavBarComponent />
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/category/:categoryId" element={<Category />}  />
            <Route path="/item/:itemId" element={<ItemDetails />}  />
        </Routes>
    </Router>
    )
}

export default MainRouter;
