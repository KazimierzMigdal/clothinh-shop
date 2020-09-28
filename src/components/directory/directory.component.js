import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { DirectoryContainer } from './directory.styles.js'

import MenuItem from '../menu-item/menu-item.component.js'

import { selectDirectionSections } from '../../redux/directory/directory.selectors.js'


const Directory = ({sections}) =>(
  <DirectoryContainer >
    {
      sections.map(({ id, ...otherSectionProps }) =>(
          <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </DirectoryContainer>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectionSections
});

export default connect(mapStateToProps)(Directory);