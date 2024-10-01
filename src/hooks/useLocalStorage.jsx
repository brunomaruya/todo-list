import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // Pega o valor inicial do localStorage ou usa o valor inicial padrão
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Erro ao ler do localStorage", error);
      return initialValue;
    }
  });

  // Função para atualizar o valor tanto no estado quanto no localStorage
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Atualiza o estado
      setStoredValue(valueToStore);

      // Atualiza o localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Erro ao salvar no localStorage", error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
