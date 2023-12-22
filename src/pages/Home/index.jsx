import React from 'react';
import fondo from '../../assets/3xi.svg';
import Button from '../../layouts/Button';
import { Link } from 'react-router-dom';


export default function Home() {

  const title = "¡Quiero participar!"

  return (
    <React.Fragment>
            <h1 className="flex justify-center font-medium text-5xl mt-[4rem]">Laboratorio cívico</h1>
      <div className="flex items-center justify-between">
        <div className="flex ">
          <div>
            <img src={fondo} alt="" className="w-[30rem] mt-[-6rem]" />
          </div>
          <div className="ml-[27rem] w-[50rem] mt-[10rem]">
            <p className="text-center text-xl w-[50rem] space-y-4 font-semibold">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
      <Link to="/cuestionario" className="w-[23rem] h-[3rem] mt-[-25rem]">
          <Button title={title}/>
      </Link>
      </div>
    </React.Fragment>
  );
}
