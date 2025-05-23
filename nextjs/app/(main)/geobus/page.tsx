/* * */

import { GeoBusPage } from '@/components/geobus/GeoBusPage';
import { redirect } from 'next/navigation';

/* * */

export default function Page() {
	redirect('/');
	return <GeoBusPage />;
}
