'use client'

import { motion } from 'framer-motion'

export function Gretting() {
  return (
    <motion.div
      className="mt-32 flex h-32 w-32 flex-col items-center justify-center rounded-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: '100%'
      }}
    >
      <motion.h1>HIRO</motion.h1>
      <motion.h6>backoffice</motion.h6>
    </motion.div>
  )
}
