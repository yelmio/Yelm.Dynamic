const CrossIcon = ({fill, stroke, width, height}) => {
  return ( 
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
  <path
    d="M1.5 1.5L9.00004 9M9.00004 9L16.5 1.5M9.00004 9L1.5 16.5M9.00004 9L16.5 16.5"
    stroke={stroke}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  </svg>
  );
}
 
export default CrossIcon;