import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/reset.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import WithoutNav from "./components/Navbar/WithoutNav";
import WithNav from "./components/Navbar/WithNav";
import DrinksCategories from "./pages/Categories/Drinks";
import BooksCategories from "./pages/Categories/Books";
import Cart from "./pages/Cart";
import DrinksScreen from "./components/Drinks/DrinksScreen";
import Books from "./pages/Books";
import MenuContext from "./contexts/MenuContext";
import CartContext from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";

export default function App() {
  const [menuInfo, setMenuInfo] = useState(false);
  const [drinkCart, setDrinkCart] = useState([]);
  const [bookCart, setBookCart] = useState([]);

  return (
    <UserProvider>
      <CartContext.Provider value={{ drinkCart, setDrinkCart, bookCart, setBookCart }}>
        <MenuContext.Provider value={{ menuInfo, setMenuInfo }}>
          <BrowserRouter>
            <Routes>
              <Route element={<WithoutNav />}>
                <Route path="/" element={<Navigate replace to="/sign-in" />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<Register />} />
              </Route>

              <Route element={<WithNav />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/home" element={<Home />} />
                <Route path="/categories/drink" element={<DrinksCategories />} />
                <Route path="/drinks/:id" element={<DrinksScreen />} />
                <Route path="/categories/book" element={<BooksCategories />} />
                <Route path="/books/:id" element={<Books />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MenuContext.Provider>
      </CartContext.Provider>
    </UserProvider>
  );
}
