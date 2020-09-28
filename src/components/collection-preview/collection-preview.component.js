import React from 'react';

import CollectionItem from '../colletion-item/collection-item.component.js';

import { CollectionPreviewComponent, CollectionTitleLink, PreviewContainer } from './collection-preview.styles.js'


const CollectionPreview = ({ title, items }) => (
        <CollectionPreviewComponent >
            <CollectionTitleLink to={`/shop/${title.toLowerCase()}`} >{title.toUpperCase()}</CollectionTitleLink>
            <PreviewContainer >
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </PreviewContainer>
        </CollectionPreviewComponent>
    )

export default CollectionPreview