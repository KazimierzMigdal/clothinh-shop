import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../colletion-item/collection-item.component.js';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ title, items }) => (
        <div className='collection-preview'>
            <Link to={`/shop/${title.toLowerCase()}`} className='title' >{title.toUpperCase()}</Link>
            <div className='preview'>
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )

export default CollectionPreview