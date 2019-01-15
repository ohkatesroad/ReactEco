import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

const Counter = (props) => {
  const {
    count,
    onIncrementOne,
    onDecrementOne
  } = props
  return (
    <div className="Counter has-text-centered">
      <h1 className="is-size4"><strong>{count}</strong></h1>
      <div className="button-group">
        <button className="button is-small" onClick={onIncrementOne}><strong>Increment One</strong></button>
        <button className="button is-small" onClick={onDecrementOne}><strong>Decrement One</strong></button>
      </div>
    </div>
  )
}

Counter.proptypes = {
  count: PropTypes.number.isRequired,
  onIncrementOne: PropTypes.func.isRequired,
  onDecrementOne: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.count
  }
}

// dispatch.count.onIncrementOne, dispatch.count.onDecrementOne
const mapDispatchToProps = ({ count: { onIncrementOne, onDecrementOne }}) => ({
  onIncrementOne: () => onIncrementOne(),
  onDecrementOne: () => onDecrementOne()
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
