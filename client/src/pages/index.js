/* This example requires Tailwind CSS v2.0+ */
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/app/clients');
  });

  return <p>Redirecting...</p>;
}
