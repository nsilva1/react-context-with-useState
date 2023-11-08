import { createContext, useState, ReactElement, useEffect } from 'react';

interface Profile {
  name: string;
  email: string;
}

export interface AppContextType {
  fullName: string;
  email: string;
  isAuthenticated: boolean;
  updateState: (state: string, value: any) => void;
  updateProfile: (profile: Profile) => void;
}

const initialAppState: AppContextType = {
  fullName: '',
  email: '',
  isAuthenticated: false,
  updateState() {},
  updateProfile() {},
};

export const AppContext = createContext<AppContextType | null>(null);

// load state from local storage
const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) {
      return null;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
};

const storedState = loadState();

export const AppProvider = ({ children }: { children: ReactElement }) => {
  const [appState, setAppState] = useState<AppContextType>(
    storedState ? storedState : initialAppState
  );

  useEffect(() => {
    // save state to local storage on changes
    sessionStorage.setItem('state', JSON.stringify(appState));
  }, [appState]);

  const updateState = (state: string, value: any) => {
    setAppState({
      ...appState,
      [state]: value,
    });
  };

  const updateProfile = (profile: Profile) => {
    setAppState({
      ...appState,
      fullName: profile?.name || '',
      email: profile?.email || '',
    });
  };

  const providerValues = {
    fullName: appState.fullName,
    email: appState.email,
    isAuthenticated: appState.isAuthenticated,
    updateState,
    updateProfile,
  };

  return (
    <AppContext.Provider value={providerValues}>{children}</AppContext.Provider>
  );
};
