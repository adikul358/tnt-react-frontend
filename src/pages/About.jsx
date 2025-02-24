import { useEffect, useContext } from "react"
import { ThemeContext } from "../App"

function About() {
  const themeData = useContext(ThemeContext)
  
  useEffect(_ => {
    document.title = "About | ceterisparibus"
  }, [])

  return (
    <>

      <div className="flex flex-col text-center pt-[64px] pb-[131px] px-[20px] max-w-[820px] mx-auto">
        <p className="font-mono text-[40px] leading-[54px] mb-[36px]">About</p>
        <p className="text-[18px] leading-[32px] mb-[36px]">{themeData.about.heading}</p>
        <p className="text-[15px] leading-[28px]">{themeData.about.body}</p>
      </div>

    </>
  )
}

export default About
