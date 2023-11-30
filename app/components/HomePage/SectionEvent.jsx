import React from 'react'
import { useRouter } from 'next/navigation';
import Button from '../UI/Button';
//moguci bug u router.push
function SectionEvent({data}) {
    const {title, desc, id } = data;
    const router = useRouter();
    return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1203x503"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-white mt-5">
              {title}
            </h2>
            <p className="text-base leading-relaxed mt-2">
              {desc}
            </p>
            <Button onClick={()=>router.push('/MatchDetails')} className="text-indigo-400 inline-flex items-center mt-3">
              Pogledaj reakcije
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Button>
          </div>
  )
}

export default SectionEvent