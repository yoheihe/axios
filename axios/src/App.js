import { useEffect } from 'react';
import './App.css';
import Post from './components/Post';
import axios from 'axios';

const url = 'https://sample-api.manabupanda.net/api/list';

const FirstRequest = () => {
const fetchData = async () => {
  try {
    const response = await axios(url);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
}
  useEffect(() => {
    fetchData();
    console.log('first axios request');
  }, []);

  return(
     <div>
    <h2 className='text-center'>first request</h2>
    <Post />
     </div>
  )
};

export default FirstRequest;