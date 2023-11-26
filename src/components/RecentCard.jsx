import ViewIcon from "./icons/ViewIcon"
import CommentIcon from "./icons/CommentIcon"
import HeartIcon from "./icons/HeartIcon"

function RecentCard() {
	return (
		<div className="border border-black-100 flex flex-col text-black-secondary">
			<div className="h-[162px] bg-cover bg-center" style={{backgroundImage: "url('/pic4.jpg')"}}></div>
			{/* <img src="/pic4.jpg" alt="blog_pic" className="w-1/2 object-center object-cover" /> */}
			<div className="h-[148px] p-[24px] flex flex-col">

				<h2 className="font-mono text-[18px] leading-[normal]">An Excerpt from a Memoir I Never...</h2>

				<div className="flex items-center mt-auto border-t border-black-100 pt-[15px] text-[12px]">
					<ViewIcon />
					<p className="ml-[6px] mr-[16px]">70</p>
					<CommentIcon />
					<p className="ml-[6px]">0</p>

					<p className="ml-auto mr-[7px]">14</p>
					<HeartIcon selected={false} />
				</div>

			</div>
		</div>
	)
}

export default RecentCard