import { useEffect } from "react";

function Quote() {
  useEffect(_ => {
    document.title = "Quote | ceterisparibus"
  }, [])

  return (
    <>

      <div className="flex justify-center items-center p-[20px] bg-cover bg-center h-[680px]" style={{backgroundImage: "url('./pic3.jpg')"}}>
        <div className="bg-primary-400 py-[55px] px-[58px] text-center flex flex-col max-w-[520px] w-full">
          <p className="text-[18px] leading-[32px] mb-[38px]">"Carpe Diem."</p>
          <p className="font-mono text-[22px] leading-[31px]">~Dead Poets Society</p>
        </div>
      </div>

    </>
  );
}

export default Quote;
