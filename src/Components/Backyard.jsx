import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Backyard = () => {
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
        <h3 className="text-blue">Houses with Beauty Backyard </h3>
      </motion.div>
      <div className="flex justify-between ">
        <motion.div
          className="mr-7"
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
          <Link to="/housedetails">
            <img
              src="./assets/29.jpg"
              alt=""
              className="rounded-3xl hover:opacity-90 cursor-pointer"
            />
          </Link>
          <div className="mt-5 ml-1 hover:opacity-90">
            <h5 className="text-blue cursor-pointer">
              <Link to="/housedetails"> Tabby Town</Link>
            </h5>
            <p className=" opacity-50">Gunung Batu, Indonesia</p>
          </div>
        </motion.div>
        <motion.div
          className="mr-7"
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
          <Link to="/anggana">
            <img
              src="./assets/30.jpg"
              alt=""
              className="rounded-3xl hover:opacity-90 cursor-pointer"
            />
          </Link>
          <div className="mt-5 ml-1">
            <Link to="/anggana">
              <h5 className="text-blue">Anggana</h5>
            </Link>
            <p className=" opacity-50">Bogor, Indonesia</p>
          </div>
        </motion.div>
        <motion.div
          className="mr-7"
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
          <Link to="/seattle_rain">
            <img
              src="./assets/27.jpg"
              alt=""
              className="rounded-3xl hover:opacity-90 cursor-pointer"
            />
          </Link>
          <div className="mt-5 ml-1">
            <Link to="/seattle_rain">
              <h5 className="text-blue">Seattle Rain</h5>
            </Link>
            <p className=" opacity-50">Jakarta, Indonesia</p>
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
          <Link to="/wodden_pit">
            <img
              src="./assets/32.jpg"
              alt=""
              className="rounded-3xl hover:opacity-90 cursor-pointer"
            />
          </Link>
          <div className="mt-5 ml-1">
            <Link to="/wodden_pit">
              <h5 className=" text-blue">Wodden Pit</h5>
            </Link>
            <p className=" opacity-50">Wonosobo, Indonesia</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Backyard;
