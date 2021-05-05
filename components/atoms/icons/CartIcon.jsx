const CartIcon = ({width, height, fill, stroke}) =>{
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				r={24}
				transform="matrix(1 8.74228e-08 8.74228e-08 -1 24 24)"
				fill={fill}
			/>
			<path
				d="M17.0613 19.1337C17.0783 18.954 17.2292 18.8167 17.4097 18.8167H30.5903C30.7708 18.8167 30.9217 18.954 30.9387 19.1337L32.2492 32.967C32.2687 33.1724 32.1071 33.35 31.9008 33.35H16.0992C15.8929 33.35 15.7313 33.1724 15.7508 32.967L17.0613 19.1337Z"
				stroke={stroke}
				strokeWidth="1.3"
			/>
			<path
				d="M20.7323 20.6667C20.7323 18.1743 20.4565 13.9864 23.9942 14C25.9904 14.0077 27.4464 15.4815 27.256 20.6667"
				stroke={stroke}
				strokeWidth="1.3"
				strokeLinecap="round"
			/>
		</svg>
	)
}

export default CartIcon