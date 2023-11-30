'use client'
import Image from 'next/image'
import Link from 'next/link'
import WelcomeText from './components/HomePage/WelcomeText'
import CanvasModel from './components/HomePage/CanvasModel'
import Section from './components/HomePage/Section'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { useEffect } from 'react'




const changeOnEvery3Hours = async () => {
}

export default async function Home() {
  const minutes = new Date().getSeconds()
  useEffect(() => {
    const func = async () => {
      if (minutes === 0) {
        try {
          const res = await axios.get('http://localhost:3000/api/renewDatabase')
          console.log(res)

        } catch (e) {
          // console.log('ERROR SE DESIO:', e)
          console.log('error')

        }
      }
    }
    func()
    console.log('a minute passed')
  }, [minutes])
  console.log(minutes)



  const fetchData = async () => {
    try {
      const response = await axios.get("your-api-endpoint");
    } catch (error) {
    } finally {
    }
  };

  fetchData();
  // const interval = setInterval(() => console.log('Interval'), 1000 * 10)
  // if (!interval) {
  //   console.log('aas')
  // } else {
  //   clearInterval(interval)

  //   console.log('ubicu se')
  // }
  return (
    <div className="box-border min-h-[70vh]">
      <div className="grid gap-6 md:grid-cols-2 min-h-[80vh] justify-center items-center overflow-hidden">
        <WelcomeText />
        <CanvasModel />
      </div>
      <Section Name={'Katarina'} />
    </div>
  )
}
