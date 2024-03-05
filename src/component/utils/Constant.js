const API_KEY = "AIzaSyCnhd_zALG5DRnop0wY1UjtiHBAiCz3F3I"

// const NEW_API_KEY="AIzaSyBPxZkrb5rjaZHSV4gJdQk_QqQ7G3yE5FA"
const NEW_API_KEY= process.env.REACT_APP_API_KEY



export const YOUTUBE_VIDEO_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+NEW_API_KEY

const api = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="

export const PLAY_VIDEO_URL = "https://www.youtube.com/watch?v="

// youse this url latter
export const SEARCH_RESULT_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${NEW_API_KEY}&q=`


export const SEARCH_AUTOCOMPLETE_URL = "http://suggestqueries.google.com/complete/search?client=firefox&q="


