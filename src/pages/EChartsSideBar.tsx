import Title from "../components/atom/Title";
import SpecializedBusiness from "../components/SpecializedBusiness";
import BasicBar from "../components/BasicBar";
import NightingaleChart from "../components/NightingaleChart";
import { motion } from "framer-motion";

function EChartsSideBar() {
  const listMotion = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const itemMotion = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={listMotion}
        className="absolute right-6 top-6 w-[420px] p-6 flex flex-col gap-8"
      >
        <motion.div variants={itemMotion}>
          <Title title="专项业务" />
        </motion.div>
        <motion.div variants={itemMotion}>
          <SpecializedBusiness />
        </motion.div>
        <motion.div variants={itemMotion}>
          <Title title="产品订购" />
        </motion.div>
        <motion.div variants={itemMotion}>
          <BasicBar />
        </motion.div>
        <motion.div variants={itemMotion}>
          <Title title="电子合同" />
        </motion.div>
        <motion.div variants={itemMotion}>
          <NightingaleChart />
        </motion.div>
      </motion.section>
    </>
  );
}

export default EChartsSideBar;
