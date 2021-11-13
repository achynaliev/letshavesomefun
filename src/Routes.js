import React from "react";
import AuthContextProvider from "./contexts/AuthContext";
import UserContextProvider from "./contexts/UserContext";
import TweetContextProvider from "./contexts/TweetContext";
import MerchContextProvider from "./contexts/MerchContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import MerchPage from "./pages/MerchPage";



const TweeterRoutes = () => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <TweetContextProvider>
          <MerchContextProvider>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/auth" element={<AuthPage />} />
                <Route exact path="/products" element={<MerchPage />} />
              </Routes>
            </BrowserRouter>
          </MerchContextProvider>
        </TweetContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
};

export default TweeterRoutes;

//<Route path="*" element={<NoMatch />} />
