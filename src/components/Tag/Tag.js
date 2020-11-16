import React from 'react'
import './Tag.scss';

export default function Tag(props) {
    const {category} = props;
    
    let tagName = '';
    if(category === 'javascript'){
        tagName = 'javascript';
    }
    else if(category === 'css'){
        tagName ='css';
    }
    else if(category === 'tricks'){
        tagName ='tricks';
    }
    else if(category === 'project'){
        tagName = 'projects';
    }
    else if(category === 'php'){
        tagName = 'php';
    }
    return <h4 className={tagName === '' ? 'tag-link' : 'tag-link ' + tagName}>{category}</h4>
}
