import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Kitchens = () => {
  return (
    <div className="mx-32 w-80">
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
        <h3 className="text-blue">Apartments with kitchen set</h3>
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
            <Link to="/green_park">
              <img src="./assets/33.jpg" alt="" className="rounded-3xl hover:opacity-90 cursor-pointer" />
            </Link>
          </div>
          <div className="mt-5 ml-1">
            <Link to="/green_park">
              <h5 className="text-blue">Green Park</h5>
            </Link>
            <p className=" opacity-50">Tangerang, Indonesia</p>
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
            <Link to="/podo_wae">
              <img src="./assets/34.jpg" alt="" className="rounded-3xl hover:opacity-90 cursor-pointer" />
            </Link>
          </div>
          <div className="mt-5 ml-1">
            <Link to="/podo_wae">
              <h5 className="text-blue">Podo Wae</h5>
            </Link>
            <p className=" opacity-50">Madiun, Indonesia</p>
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
            <Link to="/silver_rain">
              <img src="./assets/35.jpg" alt="" className="rounded-3xl hover:opacity-90 cursor-pointer" />
            </Link>
          </div>
          <div className="mt-5 ml-1">
            <Link to="/silver_rain">
              <h5 className="text-blue">Silver Rain</h5>
            </Link>
            <p className=" opacity-50">Bandung, Indonesia</p>
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
            <Link to="/cashville">
              <img src="./assets/36.jpg" alt="" className="rounded-3xl hover:opacity-90 cursor-pointer" />
            </Link>
          </div>
          <div className="mt-5 ml-1">
            <Link to="/cashville">
              <h5 className=" text-blue">Cashville</h5>
            </Link>
            <p className=" opacity-50">Kemang, Indonesia</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Kitchens;
