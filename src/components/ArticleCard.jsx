import UserIcon from "./icons/UserIcon"
import ShareIcon from "./icons/ShareIcon"
import HeartIcon from "./icons/HeartIcon"

function ArticleCard() {
	return (
		<div className="border border-black-100 flex text-black-secondary my-[17px] h-[353px]">
			<div className="w-1/2 bg-cover bg-center" style={{backgroundImage: "url('/pic4.jpg')"}}></div>
			{/* <img src="/pic4.jpg" alt="blog_pic" className="w-1/2 object-center object-cover" /> */}
			<div className="w-1/2 px-[48px] py-[43px] flex flex-col">

				<div className="flex flex-row items-center justify-between mb-[18px]">
					<div className="flex items-center">
						<UserIcon width={32} height={32} />
						<div>
							<p className="ml-[10px] text-[12px] leading-[normal]">Leia</p>
							<p className="ml-[10px] text-[12px] leading-[normal]">Nov 3 ・ 5 min</p>
						</div>
					</div>
					<ShareIcon height={24} />
				</div>

				<h2 className="font-mono text-[22px] leading-[normal] mb-[12px]">An Excerpt from a Memoir I Never Wrote (Pt 1)</h2>
				<p className="text-[15px] leading-[23px] opacity-80">Here's to my mom, my best friends (family at this point; you know who you are), the relatives who let an aimlessly floating 18-year-old...</p>

				<div className="flex items-center mt-auto border-t border-black-100 pt-[16px] text-[12px]">
					<p>70 views</p>
					<p className="ml-[16px]">0 comments</p>
					<p className="ml-auto mr-[7px]">14</p>
					<HeartIcon selected={false} />
				</div>

			</div>
		</div>
	)
}

export default ArticleCard