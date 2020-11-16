import React from 'react'
import './Article.scss';
import Tag from '../Tag/Tag';
import Date from './DateWrapper';
// import {PostContext} from '../../context/post';
import {Link} from 'react-router-dom';

export default function Article(props) {
    const {image,title,category,url,date} = props.values;
    
    return <article className="article masonry-item">
            <div className="featured-image">
                <Link to={`/blog/${url}`} >
                    <img src={image} alt="featured" className="image" />
                </Link>
            </div>
            <div className="article__content featured-post flex align-item-start">
                <Date date={date} />

                <div className="footer-post flex flex-col align-item-start">
                    <Link to={`/blog/${url}`} className="main-title">{title}</Link>
                    <span className="mt-1">
                        <Link to={`/category/${category}`}><Tag category={category}/></Link>
                    </span>
                </div>
            </div>
        </article>
}
