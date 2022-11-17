import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/reset.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import WithoutNav from "./components/Navbar/WithoutNav";
import WithNav from "./components/Navbar/WithNav";
import DrinksCategoriesScreen from "./components/DrinksCategories/DrinksCategoriesScreen";
import BooksCategories from "./pages/Categories/Books";
import CartScreen from "./components/Cart/CartScreen";
import DrinksScreen from "./components/Drinks/DrinksScreen";
import BooksScreen from "./components/Books/BooksScreen";
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
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/home" element={<Home />} />
                <Route path="/categories/drink" element={<DrinksCategoriesScreen />} />
                <Route path="/drinks/:id" element={<DrinksScreen />} />
                <Route path="/categories/book" element={<BooksCategories />} />
                <Route path="/books/:id" element={<BooksScreen />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MenuContext.Provider>
      </CartContext.Provider>
    </UserProvider>
  );
}
