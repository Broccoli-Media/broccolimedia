import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { GOLD_BROCCOLI } from '../../../assets/images/imageURL/Constants.js';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <img
            src={GOLD_BROCCOLI}
            alt="BroccoliMedia"
            width={100}
            height={100} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;