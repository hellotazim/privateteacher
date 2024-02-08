import { redirect } from 'next/navigation';
export default async function AuthIndex({ params }) {
    redirect('/auth/sign-in');
}