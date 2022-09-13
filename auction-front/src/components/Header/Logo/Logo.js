import logo from "../../../assets/images/logo_transparent.png";
const Logo = ({ logoClass }) => {
  return (
    <div>
      <img className={logoClass} src={logo} alt="Logo" />
    </div>
  );
};
export default Logo;
