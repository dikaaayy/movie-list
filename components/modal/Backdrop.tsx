import { motion } from 'framer-motion'

export default function Backdrop({
  children,
  onClick,
}: {
  children: any
  onClick: any
}) {
  return (
    <motion.div
      className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-slate-900 bg-opacity-10"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
