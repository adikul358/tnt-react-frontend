import UserIcon from "./icons/UserIcon"
import ShareIcon from "./icons/ShareIcon"
import HeartIcon from "./icons/HeartIcon"

function ArticleCard(props) {
	return (
		<div className="border border-black-100 flex text-black-secondary my-[17px] h-[353px]">
			{props.thumbnail !== "" && <div className="w-full bg-cover bg-center" style={{backgroundImage: `url('${props.thumbnail}')`}}></div>}
			{/* <img src="/pic4.jpg" alt="blog_pic" className="w-1/2 object-center object-cover" /> */}
			<div className="w-full px-[48px] py-[43px] flex flex-col">

				<div className="flex flex-row items-center justify-between mb-[18px]">
					<div className="flex items-center">
						<UserIcon width={32} height={32} />
						<div>
							<p className="ml-[10px] text-[12px] leading-[normal]">{props.author}</p>
							<p className="ml-[10px] text-[12px] leading-[normal]">{props.date} ・ {props.reading}</p>
						</div>
					</div>
					<ShareIcon height={24} />
				</div>

				<h2 className="font-mono text-[22px] leading-[normal] mb-[12px]">{props.heading}</h2>
				<p className="text-[15px] leading-[23px] opacity-80 line-clamp-3">{props.summary}</p>

				<div className="flex items-center mt-auto border-t border-black-100 pt-[16px] text-[12px]">
					<p>{props.views || 0} views</p>
					<p className="ml-[16px]">{props.comments || 0} comments</p>
					<p className="ml-auto mr-[7px]">{props.likes || 0}</p>
					<HeartIcon selected={false} />
				</div>

			</div>
		</div>
	)
}

export default ArticleCard