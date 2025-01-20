```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function About() {
  const router = useRouter();
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const handleRouteChangeError = (err, url) => {
      if (err) {
        console.error('Error during route change:', err);
        setError(`Failed to navigate to ${url}`);
      }
    };

    router.events.on('routeChangeError', handleRouteChangeError);
    return () => {
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router.events]);

  const handleClick = () => {
    router.push('/nonexistentpage');
  };

  return (
    <div>
      <h1>About Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleClick}>Go to Nonexistent Page</button>
    </div>
  );
}
```