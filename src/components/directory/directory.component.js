import React from 'react'

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component.js'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectDirectionSections } from '../../redux/directory/directory.selectors.js'


const Directory = ({sections}) =>(
  <div className='directory-menu'>
    {
      sections.map(({ id, ...otherSectionProps }) =>(
          <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
)


const mapStateToProps = createStructuredSelector({
    sections: selectDirectionSections
});

export default connect(mapStateToProps)(Directory);