import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {url} from '../utils/URL';

const PostContext = React.createContext();

function PostProvider({children}) {
    const [posts,setPosts] = useState([]);
    const [categories,setCategories] = useState([]);
    const [loading,setLoading] = useState(false);
    
    useEffect(()=>{
        setLoading(false);

        axios.all([axios.get(`${url}/posts?_sort=date:DESC`),axios.get(`${url}/categories`)])
            .then(response => {
                // handle posts
                // console.log(response);
                const {data:dataPost} = response[0];
                const formatData = [...dataPost].map(post => {
                    // const image = url+post.image.url;
                    const category = post.category.name;
                    // return {...post,image,category};
                    return {...post,category};
                });
                setPosts(formatData);
                // handle categories

                const {data:dataCategories} = response[1];
            
                const categories = [...dataCategories].map(category => category.name);

                setCategories(categories);
                // console.log(formatData);
                // when handle success
                setLoading(true);
            })
            .catch(error => console.log(error));
    
    },[])

    return <PostContext.Provider value={{posts,categories,loading}}>
        {children}
    </PostContext.Provider>
}
export {PostContext,PostProvider};