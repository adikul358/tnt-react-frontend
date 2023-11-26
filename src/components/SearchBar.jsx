import { useEffect, useRef, useState } from "react";
import SearchIcon from "./icons/SearchIcon"
import CrossIcon from "./icons/CrossIcon"

function SearchBar() {
	const [open, setOpen] = useState(false)
	const [val, setVal] = useState("")
	function handleVal(e) {
		setVal(e.target.value)
	}
	const inputRef = useRef(null)
	useEffect(_ => {
		if (open) {inputRef.current.focus()}
	}, [open])

	return (
		<div className={`${open ? "border-b" : ""} border-primary-300 flex flex-row items-center mr-[15px] py-[4px]`}>
			<div className="p-1" onClick={_ => setOpen(true)}><SearchIcon /></div>
			{open && (
				<>
				<input ref={inputRef} className="text-[18px] px-[10px] w-[170px] focus:outline-none" type="text" placeholder="Search" value={val} onChange={handleVal} />
				<CrossIcon onClick={_ => {setOpen(false);setVal("")}} />
				</>
			)}
		</div>
	)

}

export default SearchBar