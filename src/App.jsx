import {Outlet, Link} from "react-router-dom"
import ScrollTop from "./ScrollTop";

function App() {
  return (
    <>
    <ScrollTop />
    <div className="App text-black-secondary">
      <div className="flex flex-col items-center pt-[35px] pb-[31px] text-[15px] leading-[28px]">
        <img src="/logo.png" className="mb-[16px]" alt="logo" />
        <p className="mb-[22px]">seventeen year old socrates</p>
        <div className="flex flex-row justify-center gap-x-[20px] text-[14px] px-[10px]">
          <Link to="/"><p>Home</p></Link>
          <Link to="/about"><p>About</p></Link>
          <Link to="/quote"><p>Quote</p></Link>
          <a href="https://www.instagram.com/thinkingofnotthinking/"><p>Instagram</p></a>
        </div>
      </div>

      <Outlet />

      <p className="text-[14px] leading-[25px] text-center mt-[127px] mb-[37px]">©2021 by thinkingofnotthinking</p>

    </div>
    </>
  );
}

export default App;
