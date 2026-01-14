import { useState } from "react";
import { motion } from "motion/react";
import DrawerComponent from "./components/DrawerComponent";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      {!openDrawer && (
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05,
            backgroundColor: '#1473ff'
           }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenDrawer(true)}
          className="rounded-xl border-2 border-transparent px-5 py-2 text-sm font-medium text-white bg-blue-500 cursor-pointer transition-all duration-250"
        >
          Open Menu
        </motion.button>
      )}
      <DrawerComponent open={openDrawer} onClose={handleClose} />
    </>
  );
}

export default App;
