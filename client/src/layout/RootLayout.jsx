import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
export default function RootLayout() {
  return (
    <div className="w-full bg-white dark:bg-zinc-900">
      <Navbar />
      <main className="mt-14">
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration
        getKey={(location, matches) => {
          return location.key;
        }}
      />
    </div>
  );
}
