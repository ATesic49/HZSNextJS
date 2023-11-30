import Match from './Match'
import { useParams } from 'react-router-dom'
import { useInfiniteQuery } from 'react-query'
import InfiniteScroll from 'react-infinite-scroll-component'

//promeni hook
//Post vrati
const getMatches = async ({ pageParam = 0, isUpcoming }) => {
  let api_key
  isUpcoming ? (api_key = 'api key za predstojece') : 'api key za prethodne '
  const res = axios.get(api_key)
  const data = res.data()
  return { ...data, prevOffset: pageParam }
}

function Feed() {
  const { isUpcoming } = useParams()
  const isUpcomingBoolean = isUpcoming === 'true'

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['matches'],
    queryFn: getMatches,
    getNextPageParam: lastPage => {
      if (lastPage.prevOffset + 10 > lastPage.articleCount) {
        return false
      }

      return lastPage.prevOffset + 10
    },
  })
  const articles = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.articles]
  }, [])

  return (
    <div className="w-full flex flex-col justify-center  bg-stone-100 p-5 mb-5">
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-4xl text-center my-5 font-bold">
          {isUpcomingBoolean ? 'Najnoviji rezultati' : 'Prethodni rezultati'}
        </h1>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <InfiniteScroll
          dataLength={articles ? articles.length : 0}
          next={() => fetchNextPage()}
          hasMore={hasNextPage}
          loading={<div>Loading...</div>}
        >
          <div>
            {articles &&
              articles.map((data, index) => <Match key={index} data={data} />)}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default Feed
