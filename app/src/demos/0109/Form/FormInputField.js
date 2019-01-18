import React from 'react'
import PropTypes from 'prop-types'

class FormInputField extends React.Component {
  render() {
    const {
      onChange,
      value,
      label,
      name,
      type = 'text'
    } = this.props
    return (
      <label className="FormInputField field">
        <span className="label">{label}</span>
        <div className="control">
          <input
            type={type}
            value={value}
            className="input"  
            name={name}
            onChange={onChange}
            placeholder={`Please input your ${name}`}
          />
        </div>
      </label>
    );
  }
}

FormInputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default FormInputField


