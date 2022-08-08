import { createContext, useState, useE } from 'react';

export const DataContext = createContext({});

export const DataProvider = ({children}) => {
	const [pushData, setPushData] = useState([]);

	const handleClick = (data) => {
		setPushData([...pushData, data])
	}

    const handleClear = (index) => {
        setPushData(pushData => pushData.filter((item, i) => i !== index));
    }

    const sumOfPrices = () => {
        const subtotal = pushData.reduce((acc, product) => {
            return acc + Number((product.productPrice.discountedPrice ? product.productPrice.discountedPrice : product.productPrice.orignalPrice))
        }, 0)
        return `${subtotal}:-`;

    }

    return <DataContext.Provider value={{pushData, handleClear, handleClick, sumOfPrices}}>{children}</DataContext.Provider>
}

export default DataContext;