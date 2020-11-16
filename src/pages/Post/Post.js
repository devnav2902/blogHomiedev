import React from 'react'
import {useParams} from 'react-router-dom';
import {PostContext} from '../../context/post';
import Tag from '../../components/Tag/Tag';
import Loading from '../../components/Loading';
import MainWrapper from '../../components/MainWrapper/MainWrapper';
import './Post.scss';
import {Link,Redirect} from 'react-router-dom';
import Error from '../../pages/Error/Error';
import ReactMarkdown from 'react-markdown';

export default function Post() {
    const {url} = useParams();
    const {posts,loading} = React.useContext(PostContext);
    const post = [...posts].find(post => post.url === url);

    const regex = /\/\w*\/.*\/+/g;
    const checkUrl = window.location.pathname;

    if(checkUrl.match(regex)){
        return <Redirect to="/" />
    }
    if(!loading){
        return <Loading />
    }
    else{
        if(post) {

            const {image,title,content,category,author,date} = post;
            return <MainWrapper>
                <div className="content-article">
                    <div className="content-title">
                        <div className="imagePreview cover" 
                            style={{backgroundImage: `url(${image})`}}>
                        </div>
                        <h1 className="post-title pd-lr-2 mt-3">{title}</h1>
                        <div className="pd-2 details-post flex flex-start">
                            <p className="author">
                                <strong>{author}</strong>
                            </p>
                            <small className="ml-3" style={{color: '#a1a6a9'}}>📆 {date}</small>
                            <span className="ml-3">
                                <Link to={`/category/${category}`}><Tag category={category}/></Link>
                            </span>
                        </div>
                    </div>
                    <div className="content-post">
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
