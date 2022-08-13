import { useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import DataContext from "../contexts/DataContext";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  close: {
    transition: { staggerChildren: 0.05, delayChildren: -1 },
  },
};

function Card({ data }) {
  const {
    productName,
    productDescription,
    productInformation,
    productPrice,
    productImage,
  } = data;

  const { handleClick } = useContext(DataContext);
  const [show, setShow] = useState(false);

  return (
    <main>
      <Head>
        <title>Super Product Store</title>
        <meta
          name="description"
          content="An online store that sells only super products"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="border h-[600px] w-[300px] grid grid-rows-7 grid-cols-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={productImage}
          alt={productImage}
          sizes="(min-width: 75em) 20vw,
          (min-width: 48em) 20vw,
          20vw"
          width={16}
          height={9}
          layout="responsive"
          priority
          className="relative col-span-2 h-52 w-full object-cover"
        />
        <h1 className="mx-4 mt-4 h-2 col-span-2 text-2xl font-semibold">
          {productName}
        </h1>
        <p className="mx-4 col-span-2 text-normal">{productDescription}</p>
        <div className="h-28 col-span">
          <p
            className="mx-4 text-sm cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {!show && <FontAwesomeIcon className="mr-2" icon={faChevronDown} />}
            {show && <FontAwesomeIcon className="mr-2" icon={faChevronUp} />}
            Show information
          </p>
          <AnimatePresence>
            {show && (
              <motion.ul
                initial={{
                  opacity: 0,
                  translateY: -25,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                }}
                transition={{
                  duration: 0.3,
                  staggerChildren: 0.3,
                }}
                exit={{
                  opacity: 0,
                  translateY: -15,
                }}
                className="group ml-4 mt-2 h-28 col-span-2 text-sm list-disc list-inside"
              >
                {productInformation.size && (
                  <motion.li
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.1,
                      delay: 0.15,
                    }}
                  >
                    <span className="font-bold">Size:</span>{" "}
                    {productInformation.size}
                  </motion.li>
                )}
                {productInformation.color && (
                  <motion.li
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.1,
                      delay: 0.2,
                    }}
                  >
                    <span className="font-bold">Color:</span>{" "}
                    {productInformation.color}
                  </motion.li>
                )}
                {productInformation.material && (
                  <motion.li
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.1,
                      delay: 0.25,
                    }}
                  >
                    <span className="font-bold">Material:</span>{" "}
                    {productInformation.material}
                  </motion.li>
                )}
                {productInformation.origin && (
                  <motion.li
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.1,
                      delay: 0.3,
                    }}
                  >
                    <span className="font-bold">Origin:</span>{" "}
                    {productInformation.origin}
                  </motion.li>
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div className="flex mx-4 justify-between col-span-2">
          <div className="font-bold">Price:</div>
          <div>
            <p>
              {productPrice.discountedPrice ? (
                <span className="ml-4 justify-self-end self-end col-span-2 text-red-600 font-bold">
                  {productPrice.discountedPrice}:-{" "}
                  <span className="text-slate-600 font-normal text-sm line-through">
                    {productPrice.orignalPrice}
                  </span>
                </span>
              ) : (
                <span className="ml-4 just-end col-span-2 font-bold">
                  {productPrice.orignalPrice}:-
                </span>
              )}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            handleClick(data);
          }}
          className="col-span-2 mx-4 h-max text-white font-semibold px-2 py-1 lg:hover:bg-slate-700 active:bg-slate-700 lg:active:bg-black lg:transition lg:duration-300 lg:ease-in-out bg-black"
        >
          Add to list
        </button>
      </div>
    </main>
  );
}

export default Card;
