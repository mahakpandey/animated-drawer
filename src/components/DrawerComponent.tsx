import { Drawer } from "vaul";
import dummyData from "../data/index";
import Menu from "./Menu";
import { motion } from "motion/react";
import useMeasure from "react-use-measure";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: any[]) => void;
}

const DrawerComponent = ({ open, onClose }: SimpleDialogProps) => {
  const [ref, bounds] = useMeasure();
  const handleClose = () => {
    onClose(dummyData);
  };

  return (
    <Drawer.Root open={open} onOpenChange={handleClose}>
      <Drawer.Portal>
        <Drawer.Overlay
          className="fixed inset-0 bg-black/40"
          onClick={handleClose}
        />
        <Drawer.Content
          className="fixed inset-x-4 bottom-4 z-50 mx-auto w-full max-w-[450px] rounded-[20px] bg-white shadow-2xl overflow-hidden outline-none"
          aria-label="Navigation drawer"
        >
          <motion.div animate={{ height: bounds.height }}>
            <div ref={ref}>
              <Menu open={open} />
            </div>
          </motion.div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default DrawerComponent;
