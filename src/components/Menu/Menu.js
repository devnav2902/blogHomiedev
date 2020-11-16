import React from 'react'
import './Menu.scss';
import {PostContext} from '../../context/post';
import {NavLink,Link} from 'react-router-dom';

export default function Menu() {
    const {categories,loading} = React.useContext(PostContext);
    const filter = loading ? <Link to="/" className="filter-item">All</Link> : '';
    return <div className="heading-content-wrapper">
        <div className="filter-item-content">
            {filter}
            {
                categories.map((category,index) => {
                    return <NavLink activeClassName="active" key={index} to={`/category/${category}`} className="filter-item">{category}</NavLink>
                })
            }
            
        </div>
    </div>
}
