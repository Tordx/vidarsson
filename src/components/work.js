import React from 'react'

import PropTypes from 'prop-types'

import Link from './link'
import Tag from './tag'
import './work.css'

const Work = (props) => {
  return (
    <div className="work-work">
      <img alt="image" src={props.Image} className="work-image" />
      <div className="work-details">
        <div className="work-header">
          <div className="work-heading">
            <span className="work-text">{props.Title}</span>
            <Link></Link>
          </div>
          <span className="work-text1">{props.Description}</span>
        </div>
        <div className="work-tags">
          <Tag></Tag>
          <Tag Tag="Strategy"></Tag>
          <Tag Tag="Web Development"></Tag>
        </div>
      </div>
    </div>
  )
}

Work.defaultProps = {
  Image: '/playground_assets/work%20%231-1500w.png',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  Title: 'MOTECH',
}

Work.propTypes = {
  Image: PropTypes.string,
  Description: PropTypes.string,
  Title: PropTypes.string,
}

export default Work
