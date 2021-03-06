import React from 'react';
import LaptopIcon from '../../assets/svg/laptop';
import './style.scss';
import PropTypes from 'prop-types';

const Segment = (props) => {
  const { color, text } = props;
  return (
    <div className='segment'>
      <div className={`hexagonContainer${color}`}>
        <LaptopIcon />
      </div>
      <h4 className='segmentName'>Marketing Slot</h4>
      <p className='segmentText'>{text}</p>
    </div>
  );
};

Segment.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Segment;
