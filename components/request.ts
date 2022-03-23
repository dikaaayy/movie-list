const API_KEY = '76ebb98bc55f9ac730ad21ae0ef1a116'

const request = {
  getTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  getNetflixOG: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  getComedyMovie: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  getRomanceMovie: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  getDocumentaryMovie: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  getAnimationMovie: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  getCrimeMovie: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  getDramaMovie: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  getFamilyMovie: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  getHistoryMovie: `/discover/tv?api_key=${API_KEY}&with_genres=36`,
  getMysteryMovie: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  getWarMovie: `/discover/tv?api_key=${API_KEY}&with_genres=10752`,
}
export default request
