import { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ArticleCard from "../components/ArticleCard";

function Home() {
  useEffect(_ => {
    document.title = "Home | Thinking Of Not Thinking"
  }, [])

  return (
    <>

      <div className="flex flex-col text-center items-center pt-[61px] pb-[57px]">
        <h1 className="font-mono text-[72px] leading-[90px] max-w-[780px] pb-[21px]">Thinking Of Not Thinking</h1>
        <p className="text-[20px] leading-[33.4px]">just two high school kids pouring their minds on the internet</p>
        <p className="text-[20px] leading-[33.4px]">Leia (Aanya Dev Burman) x Luke (Abhimanyu Attrish)</p>
      </div>

      <div className="h-[320px] sm:h-[535px] bg-cover sm:bg-fixed bg-center" style={{backgroundImage: "url('/pic1.jpg')"}}></div>

      <div className="flex flex-col mt-[120px] max-w-[980px] mx-auto px-[20px]">
        <div className="flex flex-row justify-between items-center h-[80px]">
          <span className="text-black-secondary hover:text-primary-300 text-[18px]">All Posts</span>
          <div className="flex items-center">
            <SearchBar />
            <button className="px-[24px] ml-[24px] h-[36px] border border-primary-300 text-[14px]">Log in / Sign up</button>
          </div>
        </div>

        <Link to="/post/an-excerpt-from-a-memoir-i-never-wrote-pt-1"><ArticleCard /></Link>
        <Link to="/post/an-excerpt-from-a-memoir-i-never-wrote-pt-1"><ArticleCard /></Link>

        <div className="my-[150px]">
          <p className="text-[22px] font-mono text-center">Subscribe Form</p>
          <p className="text-[16px] text-center">Stay up to date</p>
          <input type="text" className="h-[36px] px-[8px] text-[15px] border border-black-secondary mt-[17px] mb-[11px] w-full focus:outline-none" placeholder="Email Address" />
          <button className="bg-black-secondary w-full text-[15px] text-white text-center h-[36px] px-[8px]">Submit</button>
        </div>
      </div>

      <div className="flex mx-[80px] my-[40px] h-[380px]">
        <div className="w-1/2 flex flex-col items-center justify-center text-center bg-primary-400">
          <p className="font-mono text-[40px] leading-[54px] mb-[24px]">Contact</p>
          <a href="mailto:thinkingofnotthinking@gmail.com"><p className="text-[15px] leading-[28px] mb-[11px]">thinkingofnotthinking@gmail.com</p></a>
          <a href="https://www.instagram.com/thinkingofnotthinking/"><img src="/ig.png" alt="ig_logo" className="w-[26px]" /></a>
        </div>
        <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: "url('/pic2.jpg')"}}>
        </div>
      </div>

    </>
  );
}

export default Home;
