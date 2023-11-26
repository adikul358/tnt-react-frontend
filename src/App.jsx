import { createContext, useEffect, useRef, useState } from "react"
import {Outlet, Link} from "react-router-dom"
import ScrollTop from "./ScrollTop"
import axios from "axios"

export const ThemeContext = createContext({})

function updateFavicon (path) {
  let link = document.querySelector("link[rel~='icon']")
  link.href = path
}

function App() {
  const [themeData, setThemeData] = useState({})

  useEffect(_ => {
    (async function () {
      let base
      let about
      let quote
      try {
        let res = await axios.get(`/api/homepage?populate=*`)
        base = {
          logo: process.env.REACT_APP_STRAPI_HOST + res.data.data.attributes.logo.data.attributes.url,
          subtitle: res.data.data.attributes.subtitle,
          tagline: res.data.data.attributes.tagline,
          byline: res.data.data.attributes.byline,
          background: process.env.REACT_APP_STRAPI_HOST + res.data.data.attributes.background.data.attributes.url,
          footerBackground: process.env.REACT_APP_STRAPI_HOST + res.data.data.attributes.footer_background.data.attributes.url,
        }
        updateFavicon(base.logo)
      } catch (err) { console.log(err) }
      
      try {
        let res = await axios.get(`/api/about`)
        about = {
          heading: res.data.data.attributes.heading,
          body: res.data.data.attributes.body.reduce((a, v1) => a + v1.children.filter(v => v !== "").map(v2 => v2.text).join(" ") + " ", "" ).replace(/\s+/g, " "),
        }
      } catch (err) { console.log(err) }

      try {
        let res = await axios.get(`/api/quote?populate=*`)
        quote = {
          quote: res.data.data.attributes.quote,
          author: res.data.data.attributes.author,
          background: process.env.REACT_APP_STRAPI_HOST + res.data.data.attributes.background.data.attributes.url,
        }
      } catch (err) { console.log(err) }

      setThemeData({...base, about, quote})

    })()
  }, [])


  return (
    <ThemeContext.Provider value={themeData}>
      <ScrollTop />
      <div className="App text-black-secondary">
        <div className="flex flex-col items-center pt-[35px] pb-[31px] text-[15px] leading-[28px]">
          <img src={themeData.logo} className="mb-[16px]" alt="logo" />
          <p className="mb-[22px]">{themeData.tagline}</p>
          <div className="flex flex-row justify-center gap-x-[20px] text-[14px] px-[10px]">
            <Link to="/"><p>Home</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/quote"><p>Quote</p></Link>
            <a href="https://www.instagram.com/thinkingofnotthinking/"><p>Instagram</p></a>
          </div>
        </div>

        <Outlet />

        <p className="text-[14px] leading-[25px] text-center mt-[127px] mb-[37px]">©{(new Date()).getFullYear()} by thinkingofnotthinking</p>

      </div>
    </ThemeContext.Provider>
  )
}

export default App
