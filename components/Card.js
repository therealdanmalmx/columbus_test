import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp  } from '@fortawesome/free-solid-svg-icons'

function Card({data}) {
	const { productName, productDescription, productInformation, productPrice, productImage} = data;
	const [pushData, setPushData] = useState([])
	const [show, setShow] = useState(false)
	const handleClick = (data) => {
		setPushData([...pushData, data])
		console.log(data.productName);
	}
  return (
		<div>
			<div className="m-4 border h-[600px] w-[300px] grid grid-rows-10 grid-cols-1">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={`${productImage}`}
					alt={productImage}
					className="relative h-48 w-full object-cover"
				/>
        <h1 className="ml-4 col-span-2 mt-4 text-xl font-semibold">{productName}</h1>
				<p className="mx-4 col-span-2 text-normal">{productDescription}</p>
				<div className="h-28">
					<p
						className="ml-4 text-normal"
						onClick={() => setShow(!show)}
					>
						{ !show &&
							<FontAwesomeIcon className="transition ease-in-out duration-300 mr-2" icon={faChevronDown} />
						}
						{show &&
							<FontAwesomeIcon className="mr-2" icon={faChevronUp} />
						}
						Show information
					</p>
					{show &&
						<ul className="ml-4 mt-2 h-28 col-span-2 text-sm list-disc list-inside">
							{productInformation.size &&<li><span className="font-bold">Size:</span> {productInformation.size }</li>}
							{productInformation.color &&<li><span className="font-bold">Color:</span>  {productInformation.color }</li>}
							{productInformation.material &&<li><span className="duration-300 font-bold">Material:</span>  {productInformation.material }</li>}
							{productInformation.origin &&<li><span className="font-bold">Origin:</span>  {productInformation.origin }</li>}
						</ul>
					}
				</div>
        <p className="col-span-2">
					{
						productPrice.discountedPrice ?
						<span className="ml-4 justify-self-end self-end col-span-2 text-red-600 font-bold">{productPrice.discountedPrice}:- <span className="text-slate-400 font-normal text-sm line-through">{productPrice.orignalPrice}</span></span>
						:
						<span className="ml-4 just-end col-span-2 font-bold">{productPrice.orignalPrice}:-</span>
					}
				</p>
				<button onClick={() => handleClick(data)} className="justify-end col-span-2 m-4 h-max text-white font-semibold px-2 py-1 bg-black">Add to list</button>

			</div>
			<>
			{/* <div>
					<h2>List</h2>
					{pushData.map((data, index) => (
						<p key={index}>{data.productName}</p>
					))}

			</div> */}

			</>

		</div>
  )
}

export default Card