import codeCampusLogo from './assets/code_campus_logo.png';

function LogoHeader() {
  return (
    <>
      <div className="logo-header">
        <img
          src={codeCampusLogo}
          alt="Logotipo CodeCampus"
          className="logo"
        />
      </div>
    </>
  );
}

export default LogoHeader;
