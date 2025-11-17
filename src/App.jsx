import { BrowserRouter, Routes, Route } from "react-router-dom";

//Context
import GlobalContextProvider from "./context/GlobalContextProvider";
//Layouts
import DefaultLayout from "./layouts/DefaultLayout";
//Pages
import HomePage from "./pages/home/HomePage";
//Hooks
import ScrollToTop from "./components/technical/scrollToTop/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalContextProvider>
        <Routes>
          <Route path="/it/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="/eng/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}
