import { useState, useEffect, useContext } from 'react';
import Card from '../components/Card';
import TotalPrice from '../components/TotalPrice';
import WishList from '../components/WishList';


export default function Home() {
  const [retrieveData, setRetrieveData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('fakeAPI.json');
      const data = await res.json();

      setRetrieveData(data);
    }
    getData()

  }, [setRetrieveData]);


  return (
    <>
      <div className="flex justify-center">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {retrieveData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-6 text-center">Wish List</h1>
        <div className="text-center">
          <WishList />
        </div>
        <div className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl my-10">
          <TotalPrice />
        </div>
      </div>
    </>
  )
}
