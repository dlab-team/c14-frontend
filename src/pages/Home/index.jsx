import React from 'react';
import fondo from '../../assets/3xi.svg';

export default function Home() {
  return (
    <React.Fragment>
            <h1 className="flex justify-center font-bold text-5xl mt-[2rem]">Laboratorio Cívico</h1>
      <div className="flex items-center justify-between">
        <div className="flex ">
          <div>
            <img src={fondo} alt="" className="w-[28em]" />
          </div>
          <div className="ml-[27rem] w-[50rem] mt-[13rem]">
            <p className="text-center text-xl w-[40rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button className=" bg-black text-white rounded-xl w-[25rem] h-[3rem] mt-[-20rem]">Quiero Participar</button>
      </div>
    </React.Fragment>
  );
}
