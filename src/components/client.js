import React from 'react'

import PropTypes from 'prop-types'

import './client.css'

const Client = (props) => {
  return (
    <div className={`client-client ${props.rootClassName} `}>
      <span className="client-text">{props.Quote}</span>
      <div className="client-author">
        <img alt="image" src={props.Avatar} className="client-avatar" />
        <div className="client-details">
          <span className="client-text1">{props.Author}</span>
          <span className="client-text2">{props.Mention}</span>
        </div>
      </div>
    </div>
  )
}

Client.defaultProps = {
  Mention: '@agncy',
  Quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“',
  rootClassName: '',
  Avatar:
    'https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTA2MTI0MQ&ixlib=rb-4.0.3&w=200',
  Author: 'Joanna Smith',
}

Client.propTypes = {
  Mention: PropTypes.string,
  Quote: PropTypes.string,
  rootClassName: PropTypes.string,
  Avatar: PropTypes.string,
  Author: PropTypes.string,
}

export default Client
