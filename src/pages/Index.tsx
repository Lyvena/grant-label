import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import GrantsList from '@/components/GrantsList';
import LabelFilter from '@/components/LabelFilter';
import { fetchGrants } from '@/utils/api';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const { data: grants, isLoading, error } = useQuery({
    queryKey: ['grants'],
    queryFn: fetchGrants,
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/logo.svg" alt="AI-PGF Logo" className="h-8 mr-4" />
              <h1 className="text-3xl font-bold text-gray-900">AI-PGF Grants</h1>
            </div>
            <Link to="/auth">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <LabelFilter />
          {isLoading ? (
            <p className="text-center">Loading grants...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error loading grants</p>
          ) : (
            <GrantsList grants={grants} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;