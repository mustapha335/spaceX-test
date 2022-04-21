import React from 'react';
import { Link } from 'react-router-dom';
// style
import './style.scss';

const LaunchArticle = ({ name, link, imgUrl, description }) => (
    <div className="d-flex justify-content-center">
        <Link to={{ pathname: link }} className="article" target="_blank" rel="noopener">
            <div className="article__header">
                <h5 className="m-0 p-2">{name}</h5>
                <p className="m-0 p-2">{description}</p>
            </div>
            <img srcSet={`${imgUrl}`} alt={name} className="article__image" />
        </Link>
    </div>
);

export default LaunchArticle;
