'use client'
import React from 'react'

import Match from '../../components/Feed/Match'
import { useInfiniteQuery } from '@tanstack/react-query'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import { useParams } from 'next/navigation'



interface MathchesProps {
    pageParam: Number,
    isUpcoming: String
}


const getMatches = async ({ pageParam = 0, isUpcoming }: MathchesProps) => {
    let api_key = ''
    isUpcoming ? (api_key = 'api key za predstojece') : 'api key za prethodne '
    const res = await axios.get(api_key)
    const data = res.data()
    return { ...data, prevOffset: pageParam }
}
function page() {
    const { slug: isUpcoming } = useParams()
    const isUpcomingBoolean = isUpcoming === 'true'
    console.log(isUpcoming)
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['matches'],
        queryFn: () => getMatches({ pageParam: 1, isUpcoming: isUpcoming as String }),
        getNextPageParam: lastPage => {
            if (lastPage.prevOffset + 10 > lastPage.articleCount) {
                return false
            }

            return lastPage.prevOffset + 10
        },
    })
    const articles = data?.pages.reduce((acc: any, page: any) => {
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
                {/* <InfiniteScroll
                    dataLength={articles ? articles.length : 0}
                    next={() => fetchNextPage()}
                    hasMore={hasNextPage}
                    loading={<div>Loading...</div>}
                >
                    <div>
                        {articles &&
                            articles.map((data, index) => <Match key={index} data={data} />)}
                    </div>
                </InfiniteScroll> */}
            </div>
        </div>
    )
}

export default page