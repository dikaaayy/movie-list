import Row from './Row'
import request from './request'
export default function Rows() {
  return (
    <>
      <Row title="Trending Now" fetchURL={request.getTrending} isLarge />
      <Row
        title="Netflix Original"
        fetchURL={request.getNetflixOG}
        isLarge={false}
      />
      <Row
        title="Animation"
        fetchURL={request.getAnimationMovie}
        isLarge={false}
      />
      <Row title="Top Rated" fetchURL={request.getTopRated} isLarge={false} />
      <Row
        title="Documentary"
        fetchURL={request.getDocumentaryMovie}
        isLarge={false}
      />
      <Row title="Romance" fetchURL={request.getRomanceMovie} isLarge={false} />
    </>
  )
}
