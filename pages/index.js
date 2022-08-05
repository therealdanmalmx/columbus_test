import { useState, useEffect } from 'react';
import Card from '../components/Card';


export default function Home() {
  const [dataSecond, setDataSecond] = useState('');

  const childToParent = () => {

  }

  const [retrieveData, setRetrieveData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('fakeAPI.json');
      const data = await res.json();

      setRetrieveData(data);
    }
    getData()

  }, []);


  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {retrieveData.map((data, index) => (
            <Card key={index} data={data}/>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-6 text-center">Wish List</h1>
      </div>
    </>
  )
}
