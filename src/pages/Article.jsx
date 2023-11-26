import SearchBar from "../components/SearchBar";
import UserIcon from "../components/icons/UserIcon"
import ShareIcon from "../components/icons/ShareIcon"
import HeartIcon from "../components/icons/HeartIcon"
import FacebookIcon from "../components/icons/FacebookIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LinkIcon from "../components/icons/LinkIcon";
import RecentCard from "../components/RecentCard";

function Article() {
  useEffect(_ => {
    document.title = "An Excerpt from a Memoir I Never Wrote (Pt 1)"
  }, [])

  return (
    <>

      <div className="flex flex-col mt-[60px] max-w-[980px] mx-auto px-[20px]">
        <div className="flex flex-row justify-between items-center h-[80px]">
          <Link to="/"><span className="text-black-secondary hover:text-primary-300 text-[15px]">All Posts</span></Link>
          <div className="flex items-center">
            <SearchBar />
            <button className="px-[24px] ml-[24px] h-[36px] border border-primary-300 text-[14px]">Log in / Sign up</button>
          </div>
        </div>

        <div className="border border-black-100 flex flex-col px-[100px] py-[60px]">
          <div className="flex flex-row items-center justify-between mb-[36px]">
            <div className="flex items-center">
              <UserIcon width={32} height={32} />
              <p className="ml-[10px] text-[14px] leading-[21px]">Leia ・ Nov 3 ・ 5 min read</p>
            </div>
            <ShareIcon height={24} />
          </div>

          <h2 className="font-mono text-[28px] mb-[32px]">An Excerpt from a Memoir I Never Wrote (Pt 1)</h2>
          <p className="text-[18px] leading-[27px] text-center italic mb-[27px]">Here's to my mom, my best friends (family at this point; you know who you are), the relatives who let an aimlessly floating 18-year-old blob crash at their place, CocoTheDoggo, my grandparents, dad, my younger sister as well (for making me food and letting me snatch her Nintendo controllers whenever she failed at Legend of Zelda: Breath of the Wild), the friendships I'm currently forming at Trinity, TXT, Backstreet Boys, Machine Gun Kelly & Lorde for having concerts during the span of ‘22-’23, Bali (for simply existing), my coffee machine given to me by my uncle, my music and art teachers, Olivie Blake for writing The Atlas Six (the book that got me out of my reading slump), Netflix, Apple Music & Disney+ (couldn’t have survived without you), and to all the people I fleetingly met during this year. If you’re reading this, in those few hours/days that we met, you undeniably carved a little part of yourself into my soul. </p>
          <p className="text-[18px] leading-[27px] mb-[27px]"></p>
          <p className="text-[18px] leading-[27px] mb-[27px]"></p>
          <p className="text-[18px] leading-[27px] mb-[27px]">Well, here I am. College. I made it (shoutout to Nick & his team at Essai).</p>

          <img src="/pic4.jpg" alt="blog_pic" className="mt-[72px] object-center object-cover" />

          <div className="flex items-center gap-x-[30px] mt-[144px] h-[60px]">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <LinkIcon />
          </div>

          <div className="flex items-center border-t border-black-100 pt-[16px] text-[14px]">
            <p>70 views</p>
            <p className="ml-[16px]">0 comments</p>
            <p className="ml-auto mr-[7px]">14</p>
            <HeartIcon selected={false} />
          </div>
        </div>

        <div className="mt-[48px]">
          <div className="flex items-center justify-between mb-[24px]">
            <p className="text-[18px] leading-[29px]">Recent Posts</p>
            <Link to="/"><p className="text-[14px] leading-[29px] hover:text-primary-100">See All</p></Link>
          </div>
          <div className="grid grid-cols-3 gap-x-[36px]">
            <RecentCard />
            <RecentCard />
            <RecentCard />
          </div>
        </div>
        <div className="border border-black-100 flex flex-col mt-[36px] pt-[25px] pb-[60px] px-[100px] text-[16px]">
          <p className="font-mono pb-[16px] mb-[36px] border-b border-black-100">Comments</p>
          <input type="text" className="border border-black-100 p-[16px] hover:border-black-secondary focus:border-black-secondary focus:outline-none" placeholder="Write a comment..." />
        </div>
      </div>


    </>
  );
}

export default Article;
