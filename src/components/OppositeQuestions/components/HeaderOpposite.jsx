import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import useGetOptions from '@/hooks/OptionsHook/useGetOptions';

const HeaderOpposite = ({ phrase }) => {
  const { data } = useGetOptions();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsTextVisible(scrollPosition <= 10);
  }, [scrollPosition]);

  const infoMessage = useMemo(() => {
    const options = data?.filter(
      opt => opt.polynomialId === phrase.polynomialId && opt.group === phrase.group
    );
    return options
      ?.map(o => o.name)
      .join(', ')
      .toLowerCase();
  }, [data, phrase]);

  return (
    <div
      className="text-center mx-auto my-12 md:w-5/6 text-2xl bg-white z-50 sticky top-0"
      style={{ willChange: 'transform' }}
    >
      <div className="p-4">
        <div
          style={{
            transform: `translateY(${scrollPosition * 0.5}px)`,
            opacity: 1 - scrollPosition / 200,
          }}
        >
          {isTextVisible && (
            <>
              Ahora te invitamos al segundo desafío que consiste en participar en un juego social.
              Te vamos a pedir que te imagines lo que piensan grupos de personas distintas a ti.
            </>
          )}
        </div>
        <div>
          Concretamente te pedimos que pienses y respondas qué % de personas de{' '}
          <strong>{infoMessage}</strong> está de acuerdo con cada una de las siguientes frases.
        </div>
      </div>
    </div>
  );
};

HeaderOpposite.propTypes = {
  phrase: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    value: PropTypes.number,
    polynomialId: PropTypes.string.isRequired,
  }),
};

export default HeaderOpposite;
