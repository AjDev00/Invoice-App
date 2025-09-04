import { motion, AnimatePresence } from "framer-motion";

export default function Filter({ filter }) {
  return (
    <div>
      <div>
        <AnimatePresence>
          {filter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.25 }}
              className="absolute flex flex-col gap-5 font-bold text-[15px] right-0 border border-transparent shadow-2xl p-2 bg-white dark:bg-[#373B53] w-52 z-10 px-4 mr-6 mt-2 py-7 rounded-lg lg:right-[340px] lg:-mt-16 md:-mt-[70px] md:right-36"
            >
              <div className="cursor-pointer flex flex-row gap-3 group">
                <input type="checkbox" className="cursor-pointer" />
                <div className="group-hover:text-[#7C5DFA] duration-300">
                  Draft
                </div>
              </div>
              <div className="cursor-pointer flex flex-row gap-3 group">
                <input type="checkbox" className="cursor-pointer" />
                <div className="group-hover:text-[#7C5DFA] duration-300">
                  Pending
                </div>
              </div>
              <div className="cursor-pointer flex flex-row gap-3 group">
                <input type="checkbox" className="cursor-pointer" />
                <div className="group-hover:text-[#7C5DFA] duration-300">
                  Paid
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
