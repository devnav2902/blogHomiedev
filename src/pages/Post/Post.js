import React from 'react'
import {useParams, useRouteMatch} from 'react-router-dom';
import {PostContext} from '../../context/post';
import Tag from '../../components/Tag/Tag';
import Loading from '../../components/Loading/Loading';
import MainWrapper from '../../components/MainWrapper/MainWrapper';
import './Post.scss';
import {Link} from 'react-router-dom';
import Error from '../../pages/Error/Error';
import ReactMarkdown from 'react-markdown';
import DateWrapper from '../../components/Article/DateWrapper';

export default function Post() {
    const {url} = useParams();
    const {isExact} = useRouteMatch();
    const {posts,loading} = React.useContext(PostContext);
    const post = [...posts].find(post => post.url === url);

    if(!isExact){
        return <Error />
    }
    if(!loading){
        return <Loading />
    }
    else{
        if(post) {

            const {image,title,content,category,author,date} = post;
            return <MainWrapper>
                <div className="content-article">
                    <div className="content-header">
                        
                        <div className="post-info">
                            <h1 className="post-title mt-3 mb-1">{title}</h1>
                            <div className="details-post flex">
                                <span className="mr-3">
                                    <Link to={`/category/${category}`}><Tag category={category}/></Link>
                                </span>
                                <p className="author">
                                    <strong>by: {author}</strong>
                                </p>
                                <DateWrapper styles={'flex ml-3'} date={date} dash={true} />
                            </div>
                        </div>

                        <div className="imagePreview mt-3 cover" 
                            style={{backgroundImage: `url(${image})`}}>
                        </div>
                    </div>
                    <div className="content-post mt-3">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
            </div>
            </MainWrapper>
        }
        else {
            return <Error />
        }
    }
}
