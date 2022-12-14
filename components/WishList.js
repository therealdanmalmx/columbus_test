import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { motion } from "framer-motion";

function WishList() {
  const { pushData, handleClear } = useContext(DataContext);

  return (
    <div>
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
            className="border w-[300px] md:w-[calc(600px_+_2rem)] lg:w-[calc(900px_+_4rem)] h-full mt-4 flex rounded-full mx-auto justify-between items-center"
            key={index}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="h-auto w-20 md:w-32 lg:w-36">
              <Image
                src={`${data.productImage}`}
                alt={data.productImage}
                priority
                width={3}
                height={2}
                sizes="5vw"
                layout="responsive"
                className="object-cover rounded-l-full"
              />
            </div>
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
    </div>
  );
}

export default WishList;
