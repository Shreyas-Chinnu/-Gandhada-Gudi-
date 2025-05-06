'use client'; // Mark this component as client-side

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      router.push(`/?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input type="text" placeholder="Search for a movie..." value={query} onChange={(e) => setQuery(e.target.value)} className="p-2 rounded-l-lg bg-gray-700 text-white focus:outline-none"/>
      <button type="submit" className="p-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition-colors">
        Search
      </button>
    </form>
  );
}