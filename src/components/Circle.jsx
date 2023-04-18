const Circle = ({onClick, isActive, color}) => {
    return (
        <button
      className={`circle color-${color} ${isActive ? "active" : ""}`}
      onClick={onClick}
    ></button>
    )
}

export default Circle