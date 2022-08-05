import { useState, useEffect } from 'react';
import Card from '../components/Card';


export default function Home() {

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
    <div>
      <h1 className="text-3xl font-bold">
        Hello, You! World?
      </h1>
      {retrieveData.map((data, index) => (
        <Card key={index} data={data}/>
      ))}

    </div>
  )
}
