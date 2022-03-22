const API_KEY = '76ebb98bc55f9ac730ad21ae0ef1a116'

const request = {
  getTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  getNetflixOG: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  getActionMovie: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  getComedyMovie: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  getRomanceMovie: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  getDocumentaryMovie: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}
export default request
