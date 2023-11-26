import { useEffect } from "react";

function About() {
  useEffect(_ => {
    document.title = "About | ceterisparibus"
  }, [])

  return (
    <>

      <div className="flex flex-col text-center pt-[64px] pb-[131px] px-[20px] max-w-[820px] mx-auto">
        <p className="font-mono text-[40px] leading-[54px] mb-[36px]">About</p>
        <p className="text-[18px] leading-[32px] mb-[36px]">Leia and Luke</p>
        <p className="text-[15px] leading-[28px]">Leia (Aanya Devburman, She/Her) and Luke (Abhimanyu Attrish, He/Him).</p>
        <p className="text-[15px] leading-[28px]">We're in our senior year of high school. This blog is created by us for those who dream of stranger worlds, to all those thinkers out there who are constantly lost in their heads. You're not alone. Welcome to thinkingofnotthinking where you, our dear reader, can catch a glimpse of our mind.</p>
      </div>

    </>
  );
}

export default About;
