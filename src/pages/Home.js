import React from 'react'
import MasonryLayout from '../components/Masonry';
import Article from '../components/Article/Article';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import {PostContext} from '../context/post';
import Loading from '../components/Loading';
import {MasonryColumnContext} from '../context/masonryColumn';

export default function Home() {
    const {posts,loading}= React.useContext(PostContext);
    const column = React.useContext(MasonryColumnContext);
    if(!loading){
        return <Loading />
    }
    else{
        return <MainWrapper>
            <div className="main-center align-item-start flex">
                <div className="content-wrapper w-100">
                    <div className="grid-system" id="grid-system">
                        <MasonryLayout columns={column}>
                            {
                                posts.map(post => {
                                    return <Article key={post.id} values={post} />
                                })
                            }
                        </MasonryLayout>
                    </div>
                </div>
            </div>
        </MainWrapper>
    }
}
