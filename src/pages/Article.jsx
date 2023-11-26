import SearchBar from "../components/SearchBar"
import UserIcon from "../components/icons/UserIcon"
import ShareIcon from "../components/icons/ShareIcon"
import HeartIcon from "../components/icons/HeartIcon"
import FacebookIcon from "../components/icons/FacebookIcon"
import TwitterIcon from "../components/icons/TwitterIcon"
import LinkedinIcon from "../components/icons/LinkedinIcon"
import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import LinkIcon from "../components/icons/LinkIcon"
import RecentCard from "../components/RecentCard"
import { format } from "date-fns"
import axios from "axios"

export async function loader({ params }) {
  let res = await axios.get("/api/articles?populate=*&filters[slug][$eq]="+params.id)
  let a = res.data.data[0].attributes
  console.dir(a)
  return {
    heading: a.heading,
    body: a.body,
    thumbnail: a.thumbnail.data ? process.env.REACT_APP_STRAPI_HOST + a.thumbnail.data.attributes.url : "",
    likes: a.likes,
    views: a.views,
    comments: a.comments.data.length,
    date: a.publishedAt,
    author: a.createdBy.firstname + (a.createdBy.lastname ? " " + a.createdBy.lastname : ""),
    slug: a.slug
  }
}

function formatDate(date) {
  let fmtstr = "MMM d, yyyy"
  if ((new Date()).getFullYear() === (new Date(date)).getFullYear()) { fmtstr = "MMM d" }
  return format(new Date(date), fmtstr)
}
function summariseBody(body) {
  return body.reduce((a, v1) => a + v1.children.filter(v => v !== "").map(v2 => v2.text).join(" ") + " ", "" ).replace(/\s+/g, " ")
}
function getReadingTime(body) {
  console.log(body.split(" ").length, body.split(" ").length / 238)
  return `${Math.round(body.split(" ").length / 238)} min`
}

function Article() {
  const [recent, setRecent] = useState([])
  const articleData = useLoaderData()
  console.dir(articleData)

  useEffect(_ => {
    axios.get("/api/articles?populate=*&sort[0]=createdAt:desc&pagination[page]=1&pagination[pageSize]=3")
    .then(function (res) {
      let data = []
      for (let a of res.data.data) {
        a = a.attributes
        data.push({
          heading: a.heading,
          body: a.body,
          thumbnail: a.thumbnail.data ? process.env.REACT_APP_STRAPI_HOST + a.thumbnail.data.attributes.url : "",
          likes: a.likes,
          views: a.views,
          comments: a.comments.data.length,
          date: a.publishedAt,
          author: a.createdBy.firstname + (a.createdBy.lastname ? " " + a.createdBy.lastname : ""),
          slug: a.slug
        })
      }
      setRecent(data) 
    })
    document.title = "An Excerpt from a Memoir I Never Wrote (Pt 1)"
  }, [])

  return (
    <>

      <div className="flex flex-col mt-[60px] max-w-[980px] mx-auto px-[20px]">
        <div className="flex flex-row justify-between items-center h-[80px]">
          <Link to="/"><span className="text-black-secondary hover:text-primary-300 text-[15px]">All Posts</span></Link>
          <div className="flex items-center">
            <SearchBar />
            {/* <button className="px-[24px] ml-[24px] h-[36px] border border-primary-300 text-[14px]">Log in / Sign up</button> */}
          </div>
        </div>

        <div className="border border-black-100 flex flex-col px-[100px] py-[60px]">
          <div className="flex flex-row items-center justify-between mb-[36px]">
            <div className="flex items-center">
              <UserIcon width={32} height={32} />
              <p className="ml-[10px] text-[14px] leading-[21px]">{articleData.author} ・ {formatDate(articleData.date)} ・ {getReadingTime(summariseBody(articleData.body))} read</p>
            </div>
            <ShareIcon height={24} />
          </div>

          <h2 className="font-mono text-[28px] mb-[32px]">{articleData.heading}</h2>
          {/* <p className="text-[18px] leading-[27px] text-center italic mb-[27px]"></p> */}
          <p className="text-[18px] leading-[27px] mb-[27px]">{summariseBody(articleData.body)}</p>

          {articleData.thumbnail !== "" && <img src={articleData.thumbnail} alt="blog_pic" className="mt-[72px] object-center object-cover" />}

          <div className="flex items-center gap-x-[30px] mt-[144px] h-[60px]">
            {/* <FacebookIcon />
            <TwitterIcon />
            <LinkedinIcon />
            <LinkIcon /> */}
          </div>

          <div className="flex items-center border-t border-black-100 pt-[16px] text-[14px]">
            <p>{articleData.views || 0} views</p>
            <p className="ml-[16px]">{articleData.comments || 0} comments</p>
            <p className="ml-auto mr-[7px]">{articleData.likes || 0}</p>
            <HeartIcon selected={false} />
          </div>
        </div>

        <div className="mt-[48px]">
          <div className="flex items-center justify-between mb-[24px]">
            <p className="text-[18px] leading-[29px]">Recent Posts</p>
            <Link to="/"><p className="text-[14px] leading-[29px] hover:text-primary-100">See All</p></Link>
          </div>
          <div className="grid grid-cols-3 gap-x-[36px]">
            {recent.map(v => (
              <Link to={`/post/${v.slug}`}>
                <RecentCard {...{...v, 
                  date: formatDate(v.date),
                  reading: getReadingTime(summariseBody(v.body))
                }} />
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="border border-black-100 flex flex-col mt-[36px] pt-[25px] pb-[60px] px-[100px] text-[16px]">
          <p className="font-mono pb-[16px] mb-[36px] border-b border-black-100">Comments</p>
          <input type="text" className="border border-black-100 p-[16px] hover:border-black-secondary focus:border-black-secondary focus:outline-none" placeholder="Write a comment..." />
        </div> */}
      </div>


    </>
  )
}

export default Article
