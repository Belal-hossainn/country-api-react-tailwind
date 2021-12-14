import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const CountryDetails = () => {
    const {id} = useParams();
    const [country, setCountry] = useState({});

   

    const getCountryInfo = async()=>{
        const res = await fetch(`https://restcountries.com/v2/name/${id}`)
        const data = await res.json()
        await setCountry(data[0])
        console.log(data[0])
    };
    useEffect(()=>{
        getCountryInfo()
    },[getCountryInfo]);

    const navigate = useNavigate()

    const goBack = ()=>{
        navigate(-1)
    }
    
    const {name, flag, capital, population, nativeName, region, subregion, currencies, languages, topLevelDomain} = country;
    return (
        <div className="h-screen">
            <div>
                <button onClick={goBack} className="py-3 px-8 bg-white rounded-md shadow-lg ml-12 mb-8 "><i className="fa fa-arrow-left mr-2" ></i>Back</button>
            </div>
            <div className="container flex mx-auto px-16 items-center">
               <img className="w-1/2 h-80 ml-4 " src={flag} alt="" />
               <div className="pl-8 p8">
               <h2 className="text-2xl font-bold mb-4">{name}</h2>
               <div className=" grid grid-cols-2 gap-x-20 gap-y-3">
               <p>Native Name: <span className="dark:text-gray-400 text-gray-700 text-sm">{nativeName}</span></p>
                <p>Population: <span className="dark:text-gray-400 text-gray-700 text-sm">{population}</span></p>
                <p>Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{region}</span></p>
                <p>Sub Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{subregion}</span></p>
                <p>Capital: <span className="dark:text-gray-400 text-gray-700 text-sm">{capital}</span></p>
                <p>Top Level Domain: <span className="dark:text-gray-400 text-gray-700 text-sm">{topLevelDomain && topLevelDomain[0]}</span></p>
                <p>Currencies: <span className="dark:text-gray-400 text-gray-700 text-sm">{currencies?.map(curr=> curr.name+', ')}</span></p>
                <p>Languages: <span className="dark:text-gray-400 text-gray-700 text-sm">{languages?.map(lang=> lang.name+', ')}</span></p>

               </div>
               </div>

            </div>
        </div>
    );
};

export default CountryDetails;