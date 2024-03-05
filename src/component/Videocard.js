const Videocard = ({name})=>{
    // console.log("name ",name.snippet.thumbnails.maxres?.url)
    return(
        <div className="m-5 p-5 shadow-xl w-96 font-serif cursor-pointer  ">
            <img alt="thumbnail" src={name.snippet.thumbnails.maxres?.url ||name.snippet.thumbnails.high?.url } className="w-96 rounded-2xl  " />
            <h1 className="m-1 text-lg">{name.snippet.localized.title}</h1>
            <h1 className="m-1 font-bold">{name.snippet.channelTitle}</h1>
            <p className="m-1">{name.statistics.viewCount} Views</p>
            
        </div>
    )
}

export default Videocard;