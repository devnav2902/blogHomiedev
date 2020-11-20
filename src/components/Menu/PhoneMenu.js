import React from 'react'
import './PhoneMenu.scss';
import {PostContext} from '../../context/post';
import {NavLink,Link} from 'react-router-dom';
import {CgClose} from 'react-icons/cg';

export default function Menu(props) {
    const {isOpen,openMenu} = props;
    const {categories,loading} = React.useContext(PostContext);
    const filter = loading ? <Link onClick={()=> openMenu()} to="/" className="filter-item">All</Link> : '';
    return <div className={isOpen ? 'phone-menu active' : 'phone-menu'}>
        <div className="close-bars">
            <CgClose onClick={()=> openMenu()} />
        </div>
        <div className="category-link">
            {filter}
            {
                categories.map((category,index) => {
                    return <NavLink onClick={()=> openMenu()} activeClassName="active" key={index} to={`/category/${category}`} className="filter-item">{category}</NavLink>
                })
            }
            
        </div>
    </div>
}
