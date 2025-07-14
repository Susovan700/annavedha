import Navbar from "./components/navbar/page";
import "./page.css";
import HomePage from "./components/main/page.js"
export default function Home() {
  return (
    <div className="green-main">
      <Navbar/>
      <HomePage/>
    </div>
  );
}
