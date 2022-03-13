const SelectionIcon = (props) => {
  
  // this method of passing the active prop for color is working beautifully
  return (
    <div className="p-1 hover:cursor-pointer">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 2H37V-2H3V2ZM38 3V37H42V3H38ZM37 38H3V42H37V38ZM2 37V3H-2V37H2ZM3 38C2.44772 38 2 37.5523 2 37H-2C-2 39.7614 0.238575 42 3 42V38ZM38 37C38 37.5523 37.5523 38 37 38V42C39.7614 42 42 39.7614 42 37H38ZM37 2C37.5523 2 38 2.44771 38 3H42C42 0.238577 39.7614 -2 37 -2V2ZM3 -2C0.238577 -2 -2 0.238575 -2 3H2C2 2.44772 2.44771 2 3 2V-2Z"
          fill={props.highlight ? "#8246FF" : "white"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5628 11.577L10 19.6472H11.3047L15.2152 12.7309L14.5628 11.577ZM14.6028 28.4804L10.0652 20.4549H11.37L15.2551 27.3266L14.6028 28.4804ZM15.2298 28.9867H24.4061L23.7537 27.8329H15.8822L15.2298 28.9867ZM29.8824 20.4549L25.1889 28.756L24.5366 27.6021L28.5776 20.4549H29.8824ZM29.9476 19.6472L25.2289 11.3014L24.5765 12.4552L28.6428 19.6472H29.9476ZM15.8023 12.1538H23.8336L24.486 11L15.1499 11L15.8023 12.1538Z"
          fill={props.highlight ? "#8246FF" : "white"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.8926 16.1924V17.3174L19.8772 19.077L22.8618 17.3174V16.1924H22.0709V16.8511L19.8772 18.1444L17.6835 16.8511V16.1924H16.8926Z"
          fill={props.highlight ? "#8246FF" : "white"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.2446 18.5576L23.2906 17.9951L20.3059 19.7547V23.274L21.26 23.8365L21.6555 23.137L21.0969 22.8077V20.2211L23.2906 18.9278L23.8491 19.2571L24.2446 18.5576Z"
          fill={props.highlight ? "#8246FF" : "white"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5215 23.8301L19.4756 23.2676V19.7484L16.491 17.9888L15.5369 18.5513L15.9323 19.2508L16.491 18.9214L18.6846 20.2147V22.8013L18.126 23.1306L18.5215 23.8301Z"
          fill={props.highlight ? "#8246FF" : "white"}
        />
      </svg>
    </div>
  );
};

export default SelectionIcon;
