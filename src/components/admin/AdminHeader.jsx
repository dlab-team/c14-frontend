import backgroundHeaderMobile from '../../assets/img/admin/backgroundHeaderMobile.png';
import backgroundHeader from '../../assets/img/admin/backgroundHeader.png';
import { twMerge } from 'tailwind-merge';

const AdminHeader = ({
  title = '',
  description = '',
  fromColor,
  toColor,
  positionTitle = 'items-start',
}) => {
  return (
    <header
      className={twMerge(
        `flex flex-col justify-center relative col-start-2 col-span-5  bg-gradient-to-r from-indigo-600 to-teal-400 p-4 md:p-8 text-white h-[298px]`,
        fromColor,
        toColor
      )}
    >
      <img
        src={backgroundHeaderMobile}
        alt="Background Header"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />
      <img
        src={backgroundHeader}
        alt="Background Header"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <div
        className={`absolute p-4 md:p-8 inset-0 flex flex-col justify-center ${positionTitle} text-white`}
      >
        <p className="text-5xl font-medium mb-4">{title}</p>
        <p className="text-2xl font-normal">{description}</p>
      </div>
    </header>
  );
};

export default AdminHeader;
