import React from 'react';
import Slider from '@/components/Slider/Slider';

export default function Home() {
  return (
    <React.Fragment>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="max-w-[30%] mx-auto">
      <Slider color="green"/>
      </div>
    </React.Fragment>
  );
}
