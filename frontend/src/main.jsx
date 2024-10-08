/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store.jsx";
import MainPage from "./pages/MainPage.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Admin from "./pages/Admin.jsx";
import VendorPage from "./pages/VendorPage.jsx";
import About from "./components/About.jsx";
import AllPage from "./components/AllPage.jsx";
import FeedbackForm from "./components/FeedBackForm.jsx";
import ViewCard from "./components/ViewCard.jsx";
import FindCards from "./components/FindCards.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/all", element: <AllPage /> },
      { path: "/feedback", element: <FeedbackForm /> },
      { path: "/view", element: <ViewCard /> },
      { path: "/find", element: <FindCards /> },
    ],
  },
  { path: "/admin", element: <Admin /> },
  { path: "/vendor", element: <VendorPage /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
