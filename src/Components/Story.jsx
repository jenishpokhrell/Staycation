import { motion } from "framer-motion";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const Story = () => {
  return (
    <div className="h-full my-20 mx-32 w-80 ">
      <div className="flex items-center">
        <motion.div
          className="mb-20 w-400 h-550 relative rounded-3xl border-2 drop-shadow"
          initial={{ scale: 0 }}
          animate="show"
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <img
            src="./assets/41.jpg"
            alt=""
            className=" absolute left-16 top-10 rounded-3xl rounded-br-large"
          />
        </motion.div>
        <div className="relative  w-2/4 ml-20">
          <motion.div
            className=" absolute left-10 -top-44"
            initial={{ opacity: 0, rotate: 45 }}
            animate="show"
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: "easeOut",
              type: "spring",
            }}
          >
            <h3 className="text-blue text-3xl font-semibold">Happy Family</h3>
          </motion.div>
          <motion.div
            className="flex absolute left-10 -top-20"
            initial={{ x: 300, opacity: 0 }}
            animate="show"
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: "easeOut",
              type: "spring",
            }}
          >
            <BsStarFill size={35} className="mr-4 text-yellow" />
            <BsStarFill size={35} className="mr-4 text-yellow" />
            <BsStarFill size={35} className="mr-4 text-yellow" />
            <BsStarFill size={35} className="mr-4 text-yellow" />
            <BsStarFill size={35} className="mr-4 text-yellow" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate="show"
            whileInView={{ scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: "easeOut",
              type: "spring",
            }}
          >
            <div className=" w-110 absolute left-10 -top-5">
              <p className="text-4xl text-blue">
                What a great trip with my family and I should try again next
                time soon ...
              </p>
            </div>
            <div className="absolute left-10 top-20">
              <p className=" text-lg opacity-50">Angga, Product Designer</p>
            </div>
          </motion.div>
          <motion.div
            className=" absolute top-36 left-10"
            initial={{ y: 150, opacity: 0 }}
            animate="show"
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: "easeOut",
              type: "spring",
            }}
          >
            <button className="rounded-md py-3 px-7 my-10 text-white font-semibold bg-bu drop-shadow-2xl ">
              Read Their Story
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Story;
