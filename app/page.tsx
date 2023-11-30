'use client'
import Image from 'next/image'
import Link from 'next/link'
import WelcomeText from './components/HomePage/WelcomeText'
import CanvasModel from './components/HomePage/CanvasModel'
import Section from './components/HomePage/Section'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { useEffect, useState } from 'react'




const changeOnEvery3Hours = async () => {
}

export default function Home() {

  useEffect(() => {
    console.log('as')
    const interval = setInterval(async () => {
      console.log('broj')
      try {
        const res = axios.get('/api/renewDatabase')
        console.log(res)
      } catch (e) {
        console.log('error')
      }

    }, 20000); // Update every minute

    return () => clearInterval(interval);
  }, []);


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
