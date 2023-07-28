import { createContext, useState, useContext } from 'react';

const defaultIdContext = {
  currentId: '',
};

const IdContext = createContext(defaultIdContext);
export const useId = () => useContext(IdContext);

export const IdProvider = ({ children }) => {
  const [currentId, setCurrentId] = useState('');

  return (
    <IdContext.Provider
      value={{
        currentId,
        checkItemId: (key) => {
          setCurrentId(key);
        },
      }}
    >
      {children}
    </IdContext.Provider>
  );
};
