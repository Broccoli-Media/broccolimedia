import React from 'react';
import classNames from 'classnames';
import { Link } from '@chakra-ui/react';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;