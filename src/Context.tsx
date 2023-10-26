import { createContext } from 'react';

interface CountryContextType {
  selectedCountry: string | null;
  setCountry: React.Dispatch<React.SetStateAction<string | null>>;
}

const CountryContext = createContext<CountryContextType | null>(null);

export default CountryContext;
