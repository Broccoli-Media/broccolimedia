import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormLabel from './FormLabel';
import FormHint from './FormHint';

const propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  label: PropTypes.string,
  labelHidden: PropTypes.bool,
  type: PropTypes.oneOf(['textarea', 'text', 'email', 'tel', 'password', 'number', 'search', 'color', 'date', 'time', 'datetime-local']),
  name: PropTypes.string,
  status: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  formGroup: PropTypes.string,
  hasIcon: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  hint: PropTypes.string,
  id: PropTypes.string,
}

const defaultProps = {
  children: null,
  onChange: null,
  label: '',
  labelHidden: false,
  type: 'text',
  name: undefined,
  status: false,
  disabled: false,
  value: undefined,
  formGroup: null,
  hasIcon: null,
  size: '',
  placeholder: '',
  rows: 3,
  hint: null,
  id: '',
}

const Input = ({
  className,
  children,
  label,
  labelHidden,
  type,
  name,
  status,
  disabled,
  value,
  formGroup,
  hasIcon,
  size,
  placeholder,
  rows,
  hint,
  onChange,
  onKeyPress,
  id,
  ...props
}) => {

  const wrapperClasses = classNames(
    (formGroup && formGroup !== '') && (formGroup === 'desktop' ? 'form-group-desktop' : 'form-group'),
    (hasIcon && hasIcon !== '') && 'has-icon-' + hasIcon
  );

  const classes = classNames(
    'form-input',
    size && `form-input-${size}`,
    status && `form-${status}`,
    className
  );

  const Component = type === 'textarea' ? 'textarea' : 'input';
  return (
    <>
      {label && <FormLabel labelHidden={labelHidden} id={props.id}>{label}</FormLabel>}
      <div
        className={wrapperClasses}
      >
        <Component
          {...props}
          id={type !== 'textarea' ? id : null}
          type={type !== 'textarea' ? type : null}
          className={classes}
          name={name}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyPress={onKeyPress}
          rows={type === 'textarea' ? rows : null}
        />
        {children}
      </div>
      {hint && <FormHint status={status}>{hint}</FormHint>}
    </>
  );
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
