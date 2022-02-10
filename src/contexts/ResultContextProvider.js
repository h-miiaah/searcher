import React, {createContext, useContext, useState} from 'React';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({childern}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // the type will be /search, /images, /news, /videos
    const getResults = async(type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`)
    }
}