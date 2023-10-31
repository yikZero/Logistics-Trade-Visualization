import Title from "../components/atom/Title";
import SpecializedBusiness from "../components/SpecializedBusiness";
import ProductOrderingBar from "../components/ProductOrderingBar";
import ImportProportionChart from "../components/ImportProportionChart";
import { motion } from "framer-motion";

function EChartsSideBar() {

  const listMotion = {
    visible: {
      opacity: 0.7,
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
        duration: 0.3,
      },
    },
    hidden: { opacity: 0, y: -50 },
  };

  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={listMotion}
        className="absolute right-16 2xl:right-24 top-6 2xl:top-24 w-[420px] p-6 flex flex-col gap-8"
      >
        <motion.div variants={itemMotion}>
          <Title title="专项业务" />
        </motion.div>
        <motion.div variants={itemMotion}>
          <SpecializedBusiness />
        </motion.div>
        <motion.div variants={itemMotion}>
          <Title title="上合组织成员国进口总额占比" />
        </motion.div>
        <motion.div variants={itemMotion}>
          <ImportProportionChart />
        </motion.div>
        <motion.div variants={itemMotion}>
          <Title title="产品订购" />
        </motion.div>
        <motion.div variants={itemMotion}>
          <ProductOrderingBar />
        </motion.div>
      </motion.section>
    </>
  );
}

export default EChartsSideBar;
