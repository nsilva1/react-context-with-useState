import { useContext } from 'react';
import { AppContext, AppContextType } from './context/AppContext';

const Private = () => {
  const { isAuthenticated, fullName, email, updateState } = useContext(
    AppContext
  ) as AppContextType;

  const logout = () => {
    updateState('isAuthenticated', false);
  };

  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='mt-10'>
          <div className='card w-96 shadow-lg bg-white p-4'>
            <div className='flex flex-col gap-4'>
              <h2 className='text-xl'>Name:</h2>
              <h2 className='text-lg'>{fullName}</h2>
              <h2 className='text-xl'>Email:</h2>
              <h2 className='text-lg'>{email}</h2>
              <h2 className='text-xl'>Authenticated:</h2>
              <h2 className='text-lg'>{isAuthenticated.toString()}</h2>
              <button className='btn btn-error' onClick={logout}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Private };
