import { AudioWaveform } from 'lucide';
import React, { useState } from 'react'
import axios from 'axios';


const Api = () => {
    const [data, setData] = useState([])

    // API calling use fetch and async function
    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const JsonData = await response.json()

        setData(JsonData)
        //console.log(data);


        // You can show print console a single user data this way

        // const email = data[0].email;
        //console.log(email);


        // You can show all user data to the console this way

        data.forEach(user => {
            console.log(
                `Name: ${user.name}, Id: ${user.id}, Username: ${user.username},  Email:  ${user.email} , `
            );
        });
    }



    // API calling use Axios 
    const [dataTow, setDataTow] = useState([])

    const getDataTow = async () => {
        const responseTow = await axios.get('https://picsum.photos/v2/list');

        setDataTow(responseTow.data)
        console.log(dataTow);

    }

    return (
        <div>
            <button
                className='m-5 px-5 py-2 bg-gray-500 font-bold text-green-600 rounded-2xl'
                onClick={getData}
            >
                Get Data Fetch
            </button>
            <button
                className=' px-5 py-2 bg-gray-500 font-bold text-green-600 rounded-2xl'
                onClick={getDataTow}
            >
                Get Data Axios
            </button>
            {/* this div show if you click the "Get Data Fetch " Button */}
            <div className="fetchApi">
                {data.map(function(user){
                    return <div className=' bg-gray-300 p-5 '>
                        
                    <h1 className='font-bold '>Name: {user.name}</h1>
                    <h2 className='font-bold'>Id: {user.id} </h2>
                    <h3 className='font-bold'>Username: {user.username}</h3>
                    <h4 className='font-bold'>Email: {user.email}</h4>
                    
                    </div>
                })}
            </div>
            {/* this div show if you click the "Get Data Axios " Button */}
            <div className="axiosApi">
                {dataTow.map(function(elem, idx){
                    return <h3>hello {elem.author} {idx}</h3>
                })}
            </div>
        </div>
    )
}

export default Api