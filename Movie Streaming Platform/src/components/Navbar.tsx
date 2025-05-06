import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <h1>Movie Streaming Platform</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/movies">Movies</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
