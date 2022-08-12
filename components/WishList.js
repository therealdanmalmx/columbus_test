import { useState, useContext, useEffect } from "react";
import DataContext from "../contexts/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function WishList() {
  const { pushData, handleClear } = useContext(DataContext);

  return (
    <div>
      <AnimatePresence>
        {pushData &&
          pushData.map((data, index) => (
            <motion.div
              initial={{
                opacity: 0,
                translateY: -20,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              exit={{
                opacity: 0,
                translateY: -20,
              }}
              className="border w-[300px] md:w-[calc(600px_+_2rem)] lg:w-[calc(900px_+_4rem)] mt-4 flex rounded-full mx-auto justify-between items-center"
              key={index}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${data.productImage}`}
                alt={data.productImage}
                priority
                className="h-12 w-12 md:w-36 md:h-16 lg:h-24 lg:w-36 relative object-cover rounded-l-full"
              />

              <span className="text-sm md:text-xl md:font-semibold">
                {data.productName}
              </span>
              <span className="lg:text-lg text-sm md:text-base">
                {data.productPrice.discountedPrice
                  ? data.productPrice.discountedPrice
                  : data.productPrice.orignalPrice}
                :-
              </span>
              <span
                className="mr-2 cursor-pointer"
                onClick={() => handleClear(index)}
              >
                <FontAwesomeIcon
                  className="md:mr-4 lg:mr-8 lg:hover:text-red-700 lg:ease-in-out lg:hover:scale-110 lg:duration-500"
                  icon={faCircleXmark}
                  size="lg"
                />
              </span>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}

export default WishList;
