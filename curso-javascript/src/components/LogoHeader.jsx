import logo from '../assets/code_campus_logo.png'

function LogoHeader() {
  return (
    <>
      <div className="logo-header">
        <img
          src={logo}
          alt="Logotipo CodeCampus"
          className="logo"
        />
      </div>
    </>
  );
}

export default LogoHeader;
