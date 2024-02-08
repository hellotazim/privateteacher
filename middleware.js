'use server'

import { cookies } from "next/headers";
import { NextResponse } from 'next/server'
import {makeDecrypt} from "@/helperFiles/encryptDecrypt";
import {showErrorNotification} from "@/helperFiles/showNotification";
import {THEME_ROUTES} from "@/app/routes";

export async function middleware(request) {

    const { pathname } = request.nextUrl

    return NextResponse.next();
}