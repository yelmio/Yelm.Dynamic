import { useState } from "react";

const BadgeButton = (props) => {
  const [count, setCount] = useState(props.price)

  return (
		<div className="btn_budge">
			<span onClick={() => {setCount((count <= props.price) ? props.price : count - props.price)}}>-</span>
			<p>$ {count}</p>
			<span onClick={() => {setCount(count + props.price)}}>+</span>
		</div>
  );
}

export default BadgeButton