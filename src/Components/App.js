import React, { useEffect } from "react";
import Home from "./Home";
import Login2 from "./Login2";
import CreateUser2 from "./CreateUser2";
import Cart from "./Cart";
import Profile from "./Profile";
import Checkout from "./Checkout";
import Bundle from "./Bundle/Bundle";
import AddressForm from "./AddressForm";
import LandingPage from "./LandingPage";
import BundleDetail from "./Bundle/BundleDetail";
import OrderSuccess from "./OrderSuccess";
import OrderFail from "./OrderFail";
import Orders from "./Orders";
import { SnackbarProvider } from "notistack";
import BundleFeatured from "./Bundle/BundleFeatured";
import BundleNew from "./Bundle/BundleNew";
import BundleBest from "./Bundle/BundleBest";
import SnacksMainPage from "./SnacksPage/SnacksMainPage";
import { useSelector, useDispatch } from "react-redux";
import { loginWithToken, fetchCart, fetchBundles } from "../store";
import { Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import ProductsPage from "../Components2/ProductsPage";
import Footer from "../Components2/Footer";
import LandingPage2 from "../Components2/LandingPage2";

const black = "#010101";
const pink = "#ffcfda";
const copper = "#b16132";
const martinque = "#42385d";
const bouquet = "#b094ae";
const watermelon = "#ff6780";
const pwatermelon = "#EADED7";

export const Theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: pwatermelon,
    },
    secondary: {
      main: "#ffffff",
    },

    navButton: {
      main: "#000000",
    },

    typography: {
      button: {
        fontSize: 20, // works
        color: "#000000", // doesn't work
      },

      allVariants: {
        color: "pink",
      },
    },
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#000000",
      },
    },
  },
});

const App = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginWithToken());
    dispatch(fetchBundles());
  }, []);

  useEffect(() => {
    if (auth.id) {
      dispatch(fetchCart());
    }
  }, [auth]);
  return (
    <ThemeProvider theme={Theme}>
      <SnackbarProvider maxSnack={3}>
        <div>
          {auth.id ? <Home></Home> : <Login2 />}
          {!!auth.id && (
            <div>
              <Routes>
                <Route path="/" element={<LandingPage2 />} />
                <Route path="/signup" element={<CreateUser2 />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<AddressForm />} />
                <Route path="/bundles" element={<Bundle />} />
                <Route path="/snacks" element={<SnacksMainPage />} />
                <Route path="/bundles/:id" element={<BundleDetail />} />
                <Route path="/bundles/featured" element={<BundleFeatured />} />
                <Route path="/bundles/new" element={<BundleNew />} />
                <Route path="/bundles/best" element={<BundleBest />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/order-fail" element={<OrderFail />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/snacks/:filter" element={<SnacksMainPage />} />
                <Route path="/products" element={<ProductsPage/>} />
              </Routes>
            </div>
          )}
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
