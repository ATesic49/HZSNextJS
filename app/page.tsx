import Image from 'next/image'
import Link from 'next/link'
import WelcomeText from './components/HomePage/WelcomeText'
import CanvasModel from './components/HomePage/CanvasModel'
import Section from './components/HomePage/Section'
import { motion, AnimatePresence } from 'framer-motion'
export default function Home() {
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
