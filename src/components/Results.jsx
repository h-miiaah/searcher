import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import {Loading} from './Loading';


export const Results = () => {
  const {results, isLoading, getResults, searchTerm} = useResultContext();
  const location = useLocation();

  if(isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return 'SEARCH';
    case '/images':
      return 'IMAGES';
    case '/news':
      return 'NEWS';
    case '/videos':
      return 'VIDEOS';
    
    default:
      return 'ERROR';
  }
}
