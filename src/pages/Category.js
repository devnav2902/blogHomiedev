import React from 'react'
import {useParams, useRouteMatch} from 'react-router-dom';
import {PostContext} from '../context/post';
import MasonryLayout from '../components/Masonry';
import Article from '../components/Article/Article';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import Error from '../pages/Error/Error';
import Loading from '../components/Loading/Loading';
import {MasonryColumnContext} from '../context/masonryColumn';

export default function Category() {
    const {posts,loading}= React.useContext(PostContext);
    const {category} = useParams();
    const {isExact} = useRouteMatch();

    const column = React.useContext(MasonryColumnContext);
    
    if(!isExact){
        return <Error />
    }
    if(!loading){
        return <Loading />
    }
    else{
        const post = posts.filter(article => article.category === category);
        
        if(post.length !== 0){
            return <MainWrapper>
                        <MasonryLayout columns={column}>
                            {
                                post.map(post => {
                                    return <Article key={post.id} values={post} />
                                })
                            }
                        </MasonryLayout>
            </MainWrapper>
        }
        else {
            return <Error />
        }
    }
}
