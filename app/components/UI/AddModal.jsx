import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import { useState } from 'react'

function AddModal({ active, onChange }) {
  const [signIn, setSignIn] = useState(false)

  function changeMethod() {
    setSignIn(prev => !prev)
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  }

  return (
    <div>
      {active &&
        createPortal(
          <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
            <div className="absolute w-full h-full bg-gray-950 opacity-40" />
            <AnimatePresence>
              <motion.div
                className="modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="modal"
              >
                {signIn ? (
                  <SignInModal signUp={changeMethod} onClose={onChange} />
                ) : (
                  <SignUpModal signIn={changeMethod} onClose={onChange} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>,
          document.body,
        )}
    </div>
  )
}

export default AddModal
