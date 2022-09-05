import { useContext } from 'react'
import DataContext from '../contexts/DataContext'

function TotalPrice() {
    const {pushData, sumOfPrices} = useContext(DataContext);

  return (
    <div>
			{!pushData.length ? [] :
				(<p>Total Price: {sumOfPrices()}</p>)
			}
    </div>
  )
}

export default TotalPrice