"use server"
import { NextResponse } from 'next/server';
import {cookies} from "next/headers";

export async function HttpRequestGet(params) {

    let headerOptions = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    };

    const accessToken = await cookies().get('auth')
    if(accessToken !== undefined && accessToken !== null){
        headerOptions['Authorization'] = `Bearer ${accessToken['access_token']}`
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${params.endpoint}`, {
        method: 'GET',
        headers: headerOptions,
        withCredentials: true
    });

    if(!response.ok){
        throw Error("Connection error");
    }

    return await response.json();
}

export async function HttpRequestPost(params) {

    let headerOptions = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    };

    const accessToken = await cookies().get('auth')
    if(accessToken !== undefined && accessToken !== null){
        headerOptions['Authorization'] = `Bearer ${accessToken['access_token']}`
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${params.endpoint}`, {
        method: 'POST',
        headers: headerOptions,
        body: JSON.stringify(params.data),
        withCredentials: true
    });

    if(!response.ok){
        throw Error("Connection error");
    }

    return await response.json();
}

export async function HttpRequestPut() {
    return NextResponse.json({ message: 'Hello - PUT' });
}

export async function HttpRequestDelete() {
    return NextResponse.json({ message: 'Hello - DELETE' });
}