import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container flex flex-col items-center justify-center h-screen gap-y-[100px]">
      <img src="/logo/logo-3xi-negro.png" alt="Logo 3xi" className="w-10" />
      <img src="/logo/criteria/criteriaLogo.png" alt="Logo criteria" className="w-40" />
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
