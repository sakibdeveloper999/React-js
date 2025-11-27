import { AudioWaveform } from 'lucide';
import React from 'react'

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
    const getDataTow = () => {

    }

    return (
        <div>
            <button 
            className='m-auto px-5 py-2 bg-gray-500 text-green-600 rounded-2xl' 
            onClick={getData}
            >
                Get Data Fetch
            </button>
            <button 
            className='m-auto px-5 py-2 bg-gray-500 text-green-600 rounded-2xl' 
            onClick={getDataTow}
            >
                Get Data Axios
            </button>
        </div>
    )
}

export default Api