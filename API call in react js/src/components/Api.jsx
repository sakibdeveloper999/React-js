import { AudioWaveform } from 'lucide';
import React, { useState } from 'react'
import axios from 'axios';


const Api = () => {

    // API calling use fetch and async function
    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json()

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
            {/* this div show if you click the "Get Data Axios "  */}
            <div className="axiosApi">
                {dataTow.map(function(elem, idx){
                    return <h3>hello {elem.author} {idx}</h3>
                })}
            </div>
        </div>
    )
}

export default Api