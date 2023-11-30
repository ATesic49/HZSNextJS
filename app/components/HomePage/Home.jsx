import WelcomeText from './WelcomeText'
import CanvasModel from './CanvasModel'
import Section from './Section'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
function Home() {
  return (
    <div className="box-border min-h-[70vh]">
      <div className="grid gap-6 md:grid-cols-2 min-h-[80vh] justify-center items-center overflow-hidden">
        <WelcomeText />

        <CanvasModel />
      </div>
      <Section />
    </div>
  )
}

export default Home
