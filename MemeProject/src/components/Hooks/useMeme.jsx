import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIF_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export const useMeme = (tag) => {

    const [gif, setGif] = useState();
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        setLoading(true);
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageUrl = data.data.images.downsized_large.url;
        console.log(imageUrl);
        setGif(imageUrl);
        setLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);


    return { loading, gif, fetchData }


}
