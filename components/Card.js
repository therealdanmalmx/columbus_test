
function Card({data}) {
    const { productName, productDescription, productInformation, productPrice} = data;
    console.log({productName})
    console.log({productDescription})
    console.log(productInformation.size)
    console.log(productInformation.color)
    console.log(productInformation.material)
    console.log(productInformation.origin)
    console.log(productPrice.orignalPrice)
    console.log(productPrice.discountedPrice)
  return (
    <div>{productName}</div>
  )
}

export default Card