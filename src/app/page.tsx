import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";

export default function Home() {
  // Added a very simple Header & footer to make the web look  more complete
  return (
    <main>
      <NavBar />
      <Dashboard />
      <Footer />
    </main>
  );
}
