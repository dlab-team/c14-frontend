import AdminHeader from '@/components/admin/AdminHeader';
import { ResultsFooter } from './components/ResultsFooter';
import Comparison from './components/Comparison.jsx';
import { useNavigate } from 'react-router-dom';
import KeepExploring from './components/KeepExploring';
import React, { useState } from 'react';

const Results = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAccept = () => {
    //Que lleve al cuestionario pero parte social
    setIsModalOpen(false);
  };

  const handleReject = () => {
    setIsModalOpen(false);
    navigate('/reconocimiento');
  };

  return (
    <React.Fragment>
      <div>
        <AdminHeader
          title="Resultados de mi brecha de percepción"
          fromColor="from-yellow-600"
          toColor="to-fuchsia-400"
          positionTitle="items-center"
        />
        <Comparison />
        <KeepExploring />
        <ResultsFooter />
      </div>
    </React.Fragment>
  );
};

export default Results;
