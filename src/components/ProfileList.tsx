// components/ProfileList.tsx
import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Link } from 'react-router-dom';

const ProfileList: React.FC = () => {
  const { portfolios } = usePortfolio();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>All Profiles</h2>
      <ul>
        {portfolios.map((profile) => (
          <li key={profile.id}>
            {profile.name} - <Link to={`/portfolio/${profile.id}`}>View</Link> |{' '}
            <Link to={`/edit/${profile.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
