import Circle from "./Circle"
const Wrapper = ({wraps}) => {
    return (
            <div className="wrapper">
            {[1, 2, 3, 4, 5].map((num) => {
          return (
            <Circle key={num}/>
          );
        })}
            </div>
    )
}

export default Wrapper