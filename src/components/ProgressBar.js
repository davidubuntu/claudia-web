import React from "react"

const ProgressBar = props => {
  const { bgcolor, completed } = props

  const containerStyles = {
    height: 5,
    width: "50%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  }

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: "width 3s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
  }

  const labelStyles = {
    padding: "5px",
    color: "white",
    height: "1.3rem",
    width: "1.3rem",
    backgroundColor: "#ebbea8",
    borderRadius: "50%",
    display: "inline-block",
    position: "relative",
    top: "-10px",
    right: "-10x",
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  )
}

export default ProgressBar
