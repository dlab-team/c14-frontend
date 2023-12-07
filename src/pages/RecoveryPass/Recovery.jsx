import React from 'react';
import Lines from '../../components/Lines';
import RecoveryForm from './components/RecoveryForm';

const Recovery = () => {
  return (
    <div className="flex h-screen">
      <Lines />
      <div className="flex-1 flex items-center justify-center">
        <div className="border border-gray-300 shadow-xl shadow-gray-300 p-6 w-[300px] rounded-xl">
          <RecoveryForm />
        </div>
      </div>
    </div>
  );
};

export default Recovery;
