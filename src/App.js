import {
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Json from "./components/Json";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import Buyurtmalaringiz from "./components/pageProps/shopPage/Buyurtmalaringiz";
import Formalar from "./components/pageProps/shopPage/shopBy/Formalar";
import Futbolka from "./components/pageProps/shopPage/shopBy/Futbolka";
import Ryukzak from "./components/pageProps/shopPage/shopBy/Ryukzak";
import Shoes from "./components/pageProps/shopPage/shopBy/Shoes";
import Sumkalar from "./components/pageProps/shopPage/shopBy/Sumkalar";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Payment from "./pages/payment/Payment";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
      <Json/>
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/buyurtmalaringiz" element={<Buyurtmalaringiz />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
        <Route path="/futbolka" element={<Futbolka />}></Route>
        <Route path="/formalar" element={<Formalar />}></Route>
        <Route path="/ryugzak" element={<Ryukzak />}></Route>
        <Route path="/shoes" element={<Shoes />}></Route>
        <Route path="/sumkalar" element={<Sumkalar />}></Route>
      </Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
