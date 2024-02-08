'use server'

import { cookies } from "next/headers";
import { NextResponse } from 'next/server'
import {makeDecrypt} from "@/helperFiles/encryptDecrypt";
import {showErrorNotification} from "@/helperFiles/showNotification";
import {THEME_ROUTES} from "@/app/routes";

export async function middleware(request) {

    const { pathname } = request.nextUrl
    // console.log('pathname', pathname)



    /**
     * Check Theme Routes
     */
    // console.log('THEME_ROUTES', THEME_ROUTES)
    // if(pathname.indexOf(THEME_ROUTES) === -1 && pathname !== '/'){
    //     if(pathname !== '/auth/sign-in' && pathname !== '/auth/sign-up') {
    //         return NextResponse.redirect(new URL('/auth/sign-in', request.url))
    //     } else {
    //         // return NextResponse.redirect(new URL('/not-found', request.url))
    //     }
    // }


    /**
     * Check Authentication
     */
    // const credentialsCookie = await cookies().get('auth');
    // if(credentialsCookie !== null && credentialsCookie !== undefined && credentialsCookie['name'] === 'auth'){
    //     const credentials = makeDecrypt(credentialsCookie['value'])
    //     try {
    //         const validateCredentialsRequest = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/v1/validateCredentials`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //                 'X-Requested-With': 'XMLHttpRequest',
    //                 'Authorization': `Bearer ${credentials['access_token']}`,
    //             },
    //             withCredentials: true
    //         });
    //         const validateCredentials = await validateCredentialsRequest.json()
    //         if(validateCredentials['message'] === 'authenticated'){
    //             if(pathname === '/auth/sign-in' || pathname === '/auth/sign-up') {
    //                 return NextResponse.redirect(new URL('/app', request.url))
    //             }
    //         } else {
    //             if(pathname !== '/auth/sign-in' && pathname !== '/auth/sign-up') {
    //                 return NextResponse.redirect(new URL('/auth/sign-in', request.url))
    //             }
    //         }
    //     } catch (error){
    //         showErrorNotification(error.message)
    //         throw error;
    //     }
    //
    // } else if ((credentialsCookie === null || credentialsCookie === undefined) && (pathname !== '/auth/sign-in' && pathname !== '/auth/sign-up')) {
    //     return NextResponse.redirect(new URL('/auth/sign-in', request.url))
    // }

    return NextResponse.next();
}

export const config = {
    matcher: [THEME_ROUTES.anonymousPaths, THEME_ROUTES.authenticatedPaths],
}