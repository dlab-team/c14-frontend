import { useState } from 'react';

export const Tooltip = ({ message, children, bgColor, width }) => {
  const [show, setShow] = useState(false);
  const tooltipClass = `relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap ${bgColor} shadow-lg rounded-md ${width}`;
  const arrowClass = `w-3 h-3 -mt-2 rotate-45 ${bgColor}`;

  return (
    <div className="relative flex flex-col items-center group">
      <span
        className="flex justify-center"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      <div
        className={`absolute bottom-full flex flex-col items-center group-hover:flex ${
          !show ? 'hidden' : null
        }`}
      >
        <span className={tooltipClass} dangerouslySetInnerHTML={{ __html: message }} />
        <div className={arrowClass} />
      </div>
    </div>
  );
};
