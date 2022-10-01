import React from 'react'

const Helmet = (props) => {
    document.title="Ulina -" + props.title
  return (
    <div>{props.children}</div>
  )
}

export default Helmet