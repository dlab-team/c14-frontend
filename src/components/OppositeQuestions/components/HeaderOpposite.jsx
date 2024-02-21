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
    const formattedMessage = (options?.map(o => o.name).join(', ') ?? '')
      .toLowerCase()
      .replace(/^\w/, c => c.toUpperCase());

    return formattedMessage;
  }, [data, phrase]);

  return (
    <div
      className="text-center mx-auto my-12 md:w-5/6 text-2xl bg-white z-50 top-0"
      style={{ willChange: 'transform' }}
    >
      <div className="p-4">
        <div>
              Ahora te invitamos al segundo desafío que consiste en participar en un juego social.
              Te vamos a pedir que te imagines lo que piensan grupos de personas distintas a ti.
        </div>
        <div>
          Concretamente, te pedimos que pienses y respondas qué % de personas que dicen pertenecer a
          la opción: <strong>{infoMessage}</strong>, está de acuerdo con la siguiente frase.
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
