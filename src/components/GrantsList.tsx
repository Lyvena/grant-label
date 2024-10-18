import React from 'react';
import GrantCard from './GrantCard';

interface Grant {
  id: string;
  title: string;
  description: string;
  labels: string[];
}

interface GrantsListProps {
  grants: Grant[];
}

const GrantsList: React.FC<GrantsListProps> = ({ grants }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {grants.map((grant) => (
        <GrantCard key={grant.id} grant={grant} />
      ))}
    </div>
  );
};

export default GrantsList;