import Row from './Row'
import request from '../apifetch/request'
export default function Rows() {
  return (
    <div className="bg-[#0a0a0a]">
      <Row title="Trending Now" fetchURL={request.getTrending} isLarge />
      <Row
        title="Netflix Original"
        fetchURL={request.getNetflixOG}
        isLarge={true}
      />
      <Row
        title="Animation"
        fetchURL={request.getAnimationMovie}
        isLarge={false}
      />
      <Row title="Top Rated" fetchURL={request.getTopRated} isLarge={false} />
      <Row title="Drama" fetchURL={request.getDramaMovie} isLarge={true} />
      <Row title="Romance" fetchURL={request.getRomanceMovie} isLarge={false} />
      <Row title="Crime" fetchURL={request.getCrimeMovie} isLarge={false} />
      <Row
        title="Documentary"
        fetchURL={request.getDocumentaryMovie}
        isLarge={true}
      />
      {/* <Row title="War" fetchURL={request.getWarMovie} isLarge={false} /> */}
      <Row title="History" fetchURL={request.getHistoryMovie} isLarge={false} />
    </div>
  )
}
