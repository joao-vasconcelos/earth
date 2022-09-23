import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { useEffect } from 'react';

export const usePostHog = (apiKey, config, name) => {
  const router = useRouter();

  useEffect(() => {
    // Init PostHog
    posthog.init(apiKey, config, name);

    // Track page views
    const handleRouteChange = () => posthog.capture('$pageview');
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [apiKey, config, name, router.events]);
};
