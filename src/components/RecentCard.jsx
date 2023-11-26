import ViewIcon from "./icons/ViewIcon"
import CommentIcon from "./icons/CommentIcon"
import HeartIcon from "./icons/HeartIcon"

function RecentCard(props) {
	return (
		<div className="h-[310px] border border-black-100 flex flex-col text-black-secondary">
			{props.thumbnail !== "" && <div className="h-[162px] bg-cover bg-center" style={{backgroundImage: `url('${props.thumbnail}')`}}></div>}
			<div className="flex-grow justify-between p-[24px] flex flex-col">

				<h2 className="font-mono text-[18px] leading-[normal] line-clamp-2">{props.heading}</h2>

				<div className="flex items-center mt-auto border-t border-black-100 pt-[15px] text-[12px]">
					<ViewIcon />
					<p className="ml-[6px] mr-[16px]">{props.views || 0}</p>
					<CommentIcon />
					<p className="ml-[6px]">{props.comments || 0}</p>

					<p className="ml-auto mr-[7px]">{props.likes || 0}</p>
					<HeartIcon selected={false} />
				</div>

			</div>
		</div>
	)
}

export default RecentCard