import React from 'react'
import {Link} from 'react-router-dom'
import './Error.scss';
import Tag from '../../components/Tag/Tag'

export default function Error() {
    return <div className="section-content">
        <h1 className="title">🧐Error 404</h1>
        <div className="mt-1">Ooops, something went wrong 
            <Link to="/" className="back"> <Tag category={'Return Home'} /> </Link>
        </div>
    </div>
}
