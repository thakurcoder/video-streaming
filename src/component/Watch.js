import {useSearchParams} from 'react-router-dom'

const Watch = (props)=>{

    const [params] = useSearchParams()
    // console.log(params.get('v'))

    return(
        <div>
            <iframe width="900" height="450" src={"https://www.youtube.com/embed/"+params.get('v')+
            "?si=mp6KCWzBubvB-odY"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="m-3 p-2"></iframe>
        </div>
    )
}

export default Watch;