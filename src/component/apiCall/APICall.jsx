import React, { useEffect, useState } from 'react'
import axios from 'axios'

const APICall = () => {

    const [product , setProduct]= useState([])
    const [input , setInput] = useState("")
    const [serachData , setSearch] = useState([])

    function getData() {
        const data= axios.get('https://dummyjson.com/users')
        .then(res => {
            // alert("APi success")
            // console.log(res.data);
            setProduct(res.data.users)
        }).catch(err =>{
            alert("Api Fail")
        })
        // setProduct(data)
    }

    function filterData() {
        const filterEle = product.filter(ele => {
            
           return ele.firstName.toLowerCase().startsWith(input)})
        console.log("filter Data:" ,filterEle);
        (!filterData) ? setSearch(product) : setSearch(filterEle)
        
    }

    useEffect(() => {
        getData() 
    },[])

    useEffect(() =>{
        filterData()
    },[input])

    

    console.log("serachData",serachData);

  return (
    <div>
        <h1>Api Call</h1>
        <input className='serchInput' type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <ul className=''>
            {serachData.map((product)=> (
                <li key={product.id}>{product.firstName}</li>
            ))}
        </ul>
    </div>
  )
}

export default APICall