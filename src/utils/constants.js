export const API_KEY = "AIzaSyB0j8MZd7aI0Zoa8PVBnwrtspun8rKBT0c";
export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;
export const MOST_WATCHED =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&publishedAfter=2023-10-29T00%3A00%3A00Z&maxResults=50&key=" +
  API_KEY;
export const buttonList = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "Trailers",
  "Satire",
  "News",
  "Kapil Sharma",
  "Action Thrillers",
  "Game shows",
  "Recently uploaded",
];
export const LIVE_TAG =
  "https://cdn-icons-png.flaticon.com/128/5822/5822037.png";

export const YOUTUBE_AUTOCOMPLETE_API =
  "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_RESULTS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";
