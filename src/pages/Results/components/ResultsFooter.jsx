import { ButtonsFooter } from './ButtonsFooter';

export const ResultsFooter = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full mt-16 mb-32 gap-10">
      <div className="flex flex-col justify-between items-center h-[172px] w-[330px]">
        <img src="logo/logo-3xi-negro.png" alt="Logo 3xi" className="w-[76px] h-[66px]" />
        <img
          src="logo/criteria/criteriaLogo.png"
          alt="Logo criteria"
          className="w-[280px] h-[70px]"
        />
      </div>
      <div className="flex flex-col justify-center w-full h-[335px] px-[40px] gradientFooter gap-[40px] sm:items-center md:flex-row lg:gap-[85px] lg:h-[114px] xl:gap-[250px]">
        <ButtonsFooter title="Saber más sobre 3xi" />
        <ButtonsFooter title="Saber más sobre Criteria" />
      </div>
    </footer>
  );
};
