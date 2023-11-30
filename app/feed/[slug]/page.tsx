'use client'
import React from 'react'

import Match from '../../components/Feed/Match'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import { useParams } from 'next/navigation'



interface MathchesProps {
    isUpcoming: String
}



async function page() {
    const { slug: isUpcoming } = useParams()


    const isUpcomingBoolean = isUpcoming === 'true'
    // console.log(isUpcoming)
    // const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    //     queryKey: ['matches'],
    //     queryFn: () => getMatches({ pageParam: 1, isUpcoming: isUpcoming as String }),
    //     getNextPageParam: lastPage => {
    //         if (lastPage.prevOffset + 10 > lastPage.articleCount) {
    //             return false
    //         }

    //         return lastPage.prevOffset + 10
    //     },
    // })
    // console.log(data)
    // const articles = data?.pages.reduce((acc: any, page: any) => {
    //     return [...acc, ...page.articles]
    // }, [])
    // const { data: utakmice, status, error } = useQuery({
    //     queryKey: ['utakmice'],
    //     queryFn: () => getMatches(isUpcoming as String)

    // })
    // console.log(utakmice)
    return (
        <div className="w-full flex flex-col justify-center  bg-stone-100 p-5 mb-5">
            <div className="flex justify-center items-center mb-10">
                <h1 className="text-4xl text-center my-5 font-bold">
                    {isUpcomingBoolean ? 'Najnoviji rezultati' : 'Prethodni rezultati'}
                </h1>
            </div>
            <div className="flex flex-col justify-center gap-3">
                {/*      */}
                <Match />
            </div>
        </div>
    )
}

export default page