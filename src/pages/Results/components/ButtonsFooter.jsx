import facebookLogo from '../../../assets/img/facebookLogo.png';
import instagramLogo from '../../../assets/img/instagramLogo.png';

const hover = 'hover:bg-white hover:text-black hover:border-black hover:bg-opacity-10';

export const ButtonsFooter = ({ title, link, instagram, facebook }) => {
  return (
    <div className="flex flex-col justify-center text-white  lg:flex-row lg:justify-center lg:items-center lg:gap-[16px] text-center">
      <a href={link} target="_blank">
        <button
          className={`mb-[16px] px-[20px] py-[12px] rounded-md border-solid border-[1px] border-white font-semibold text-xl lg:mb-0 ${hover}`}
        >
          {title}
        </button>
      </a>
      <div className="flex justify-center items-center gap-[16px]">
        <button
          className={`px-[10px] py-[10px] rounded-md border-solid border-[1px] ${hover} hover:invert`}
        >
          <a href={instagram} target="_blank">
            <img src={instagramLogo} />
          </a>
        </button>
        <button
          className={`px-[10px] py-[10px] rounded-md border-solid border-[1px] ${hover} hover:invert`}
        >
          <a href={facebook} target="_blank">
            <img src={facebookLogo} />
          </a>
        </button>
      </div>
    </div>
  );
};
