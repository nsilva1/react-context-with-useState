import { useState, useContext } from 'react';
import { AppContext, AppContextType } from './context/AppContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { updateProfile, updateState } = useContext(
    AppContext
  ) as AppContextType;

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const updateContext = () => {
    const profile = {
      name: name.trim(),
      email: email.trim(),
    };
    if (profile.name && profile.email) {
      updateProfile(profile);
    } else {
      alert('Please enter a valid name and email');
    }
  };

  const goToPrivate = () => {
    updateState('isAuthenticated', true);
    navigate('/private');
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='mt-10 card w-96 p-4 shadow-xl hover:shadow-2xl bg-white'>
        <div className='form-control my-3'>
          <label>Name</label>
          <input
            className='input input-bordered'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-control my-3'>
          <label>Email</label>
          <input
            className='input input-bordered'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className='btn btn-primary w-full my-3' onClick={updateContext}>
          Save To Context
        </button>
        <button className='btn btn-success w-full my-3' onClick={goToPrivate}>
          Go To Private Route
        </button>
      </div>
    </div>
  );
};

export { Home };
