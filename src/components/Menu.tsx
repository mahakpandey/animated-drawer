import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuItem from "./MenuItem";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import dummyData from "../data";

const slideVariants = {
  enter: (dir: number) => ({
    x: `${110 * dir}%`,
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: `${-110 * dir}%`,
    opacity: 0,
  }),
};

const Menu = ({ open }: { open: boolean }) => {
  const [drawerData, setDrawerData] = useState<any[]>(dummyData);
  const [history, setHistory] = useState<any[]>([]);
  const [direction, setDirection] = useState(1);

  const handleNext = (valId: number) => {
    setDirection(1);
    setHistory([...history, drawerData]);
    const childArr = drawerData.find((val) => val.id === valId)?.children || [];
    setDrawerData(childArr);
  };

  const handleBack = () => {
    setDirection(-1);
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setDrawerData(prev);
      setHistory(history.slice(0, -1));
    }
  };

  useEffect(() => {
    if (open) {
      setDrawerData(dummyData);
      setHistory([]);
    }
  }, [open]);

  return (
    <motion.div
      initial={false}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="p-4 bg-white overflow-hidden"
    >
      {history.length > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0 }}
          onClick={handleBack}
          className="mb-3 flex items-center gap-1.5 rounded-2xl p-1 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 cursor-pointer hover:bg-gray-200/50 pr-2"
          aria-label="Go back to previous menu"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          Back
        </motion.button>
      )}
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={history.length}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="w-full flex flex-col gap-2 relative"
          >
            {drawerData.map((val) => (
              <MenuItem
                key={val.id}
                value={val}
                handleNext={() => handleNext(val.id)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
    </motion.div>
  );
};

export default Menu;
