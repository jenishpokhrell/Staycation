import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Rooms = () => {
  return (
    <div className="mx-32  w-80">
      <motion.div
        className="mt-24 mb-6"
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
        <h3 className="text-blue">Houses with Large Rooms</h3>
      </motion.div>
      <div className="flex justify-between ">
        <motion.div
          className="pr-7"
          initial={{ scale: 0 }}
          animate="show"
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <div className=" drop-shadow-2xl">
            <Link to="/ps_wood">
              <img src="./assets/7.jpg" alt="" className="rounded-3xl hover:opacity-90 cursor-pointer" />
            </Link>
          </div>
          <div className="mt-5 ml-1">
            <Link to="/ps_wood">
              <h5 className="text-blue">PS Wood</h5>
            </Link>
            <p className=" opacity-50">Depok, Indonesia</p>
          </div>
        </motion.div>
        <motion.div
          className="pr-7"
          initial={{ scale: 0 }}
          animate="show"
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <div className=" drop-shadow-2xl">
            <Link to="/one_five">
              <img src="./assets/39.jpg" alt="" className="rounded-3xl hover:opacity-90 cursor-pointer" />
            </Link>
          </div>
          <div className="mt-5 ml-1">
            <Link to="/one_five">
              <h5 className="text-blue">One Five</h5>
            </Link>
            <p className=" opacity-50">Jakarta, Indonesia</p>
          </div>
        </motion.div>
        <motion.div
          className="pr-7"
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
          <div className=" drop-shadow-2xl">
            <Link to="minimal">
              <img src="./assets/12.jpg" alt="" className="rounded-3xl hover:opacity-90 cursor-pointer" />
            </Link>
          </div>
          <div className="mt-5 ml-1">
            <Link to="/minimal">
              <h5 className="text-blue">Minimal</h5>
            </Link>
            <p className=" opacity-50">Bogor, Indonesia</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate="show"
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <div className=" drop-shadow-2xl">
            <Link to="stays_home">
              <img src="./assets/17.jpg" alt="" className="rounded-3xl hover:opacity-90 cursor-pointer" />
            </Link>
          </div>
          <div className="mt-5 ml-1">
            <Link to="/stays_home">
              <h5 className=" text-blue">Stays Home</h5>
            </Link>
            <p className=" opacity-50">Wonosobo, Indonesia</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Rooms;
