'use client';

/* * */

import { usePathname, useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';
import { useEffect } from 'react';

/* * */

export function PostHogPageView() {
	//

	//
	// A. Setup variables

	const pathname = usePathname();
	const searchParams = useSearchParams();
	const posthog = usePostHog();

	//
	// B. Handle actions

	useEffect(() => {
		if (pathname && posthog) {
			let url = window.origin + pathname;
			if (searchParams.toString()) {
				url = url + `?${searchParams.toString()}`;
			}
			posthog.capture('$pageview', { $current_url: url });
		}
	}, [pathname, searchParams, posthog]);

	//
	// C. Render components

	return null;

	//
}
