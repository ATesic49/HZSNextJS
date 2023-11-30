import Image from 'next/image'
import Link from 'next/link'
import WelcomeText from './components/HomePage/WelcomeText'
import CanvasModel from './components/HomePage/CanvasModel'
import Section from './components/HomePage/Section'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'




const changeOnEvery3Hours = async () => {
}

export default async function Home() {
  const minutes = new Date().getMinutes()
  console.log(minutes)
  if (minutes === 0) {
    try {
      const res = await axios.get('http://localhost:3000/api/renewDatabase')
      console.log(res)

    } catch (e) {
      // console.log('ERROR SE DESIO:', e)
      console.log('error')

    }
  }


  const fetchData = async () => {
    try {
      const response = await axios.get("your-api-endpoint");
    } catch (error) {
    } finally {
    }
  };

  fetchData();

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
