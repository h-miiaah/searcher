import React, {createContext, useContext, useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('funny');

    // the type will be /search, /images, /news, /videos
    const getResults = async(type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '6f045bd780mshe947ec7027e416dp12a3eejsn32749bbee5db'
            }
        });

        const data = await response.json();

        // console.log({type, data})
        if (type.includes('/news')){
            setResults(data.entries);
        } else if(type.includes('/images')){
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }

        setResults(data);
        setIsLoading(false);
    }

    return(
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);