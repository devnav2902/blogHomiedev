import React from 'react'
import {useParams,Redirect} from 'react-router-dom';
import {PostContext} from '../context/post';
import MasonryLayout from '../components/Masonry';
import Article from '../components/Article/Article';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import Error from '../pages/Error/Error';
import Loading from '../components/Loading';
import {MasonryColumnContext} from '../context/masonryColumn';

export default function Category() {
    const {posts,loading}= React.useContext(PostContext);
    const {category} = useParams();
    const column = React.useContext(MasonryColumnContext);

    const regex = /\/\w*\/.*\/+/g;
    const checkUrl = window.location.pathname;

    if(checkUrl.match(regex)){
        return <Redirect to="/" />
    }
    if(!loading){
        return <Loading />
    }
    else{
        const post = posts.filter(article => article.category === category);
        
        if(post.length !== 0){
            return <MainWrapper>
                <div className="main-center align-item-start flex">
                    <div className="content-wrapper w-100">
                        <div className="grid-system" id="grid-system">
                            <MasonryLayout columns={column}>
                                {
                                    post.map(post => {
                                        return <Article key={post.id} values={post} />
                                    })
                                }
                            </MasonryLayout>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        }
        else {
            return <Error />
        }
    }
}
