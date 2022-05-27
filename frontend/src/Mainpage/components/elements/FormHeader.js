import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
    title: PropTypes.string
}

const defaultProps = {
    title: ''
}

const FormHeader = ({
    className,
    ...props
}) => {

    const classes = classNames(
        className
    );

    return (
        <h2 className={classes}>
            {props.title}
        </h2>
    );
}

FormHeader.propTypes = propTypes;
FormHeader.defaultProps = defaultProps;

export default FormHeader;