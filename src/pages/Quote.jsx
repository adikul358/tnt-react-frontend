import { useEffect, useContext } from "react"
import { ThemeContext } from "../App"

function Quote() {
  const themeData = useContext(ThemeContext)

  useEffect(_ => {
    document.title = "Quote | ceterisparibus"
  }, [])

  return (
    <>

      <div className="flex justify-center items-center p-[20px] bg-cover bg-center h-[680px]" style={{backgroundImage: `url('${themeData.quote.background}')`}}>
        <div className="bg-primary-400 py-[55px] px-[58px] text-center flex flex-col max-w-[520px] w-full">
          <p className="text-[18px] leading-[32px] mb-[38px]">"{themeData.quote.quote}"</p>
          <p className="font-mono text-[22px] leading-[31px]">~{themeData.quote.author}</p>
        </div>
      </div>

    </>
  )
}

export default Quote
