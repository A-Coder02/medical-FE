import "./App.css";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Udharis from "./pages/Udharis";
import Customers from "./pages/Customers";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="">
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/udharis" element={<Udharis />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </QueryClientProvider>
  );
}

export default App;
