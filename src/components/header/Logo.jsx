import LogoImg from "../../assets/logo.svg";
const Logo = () => {
  return (
    <div>
      <a href="./index.html">
        <img className="h-9" src={LogoImg} alt="Weather App" />
      </a>
    </div>
  );
};

export default Logo;
