function GradientSVG() {
    const idCSS = "gradientToUse";
    const gradientTransform = `rotate(100)`;
    return (
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={gradientTransform}>
            <stop offset="16.29%" stopColor="#A43680" />
            <stop offset="85.56%" stopColor="#5430B6" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  export default GradientSVG;