"use client"


import {InputField} from "@/components/inputField";
import {ButtonPrimary} from "@/components/buttons";
import {useState} from "react";
import {HttpRequestPost} from "@/helperFiles/httpRequest";
import {useRouter} from "next/navigation";
import {cookieStorageSet} from "@/helperFiles/cookieStorage";
import {showErrorNotification} from "@/helperFiles/showNotification";


export default function SignIn() {


    const [authId, setAuthId] = useState('super@managebeds.com');
    const [password, setPassword] = useState('33444');
    const router = useRouter();


    const handleLogin = async (e) => {
        e.preventDefault();

        await HttpRequestPost({endpoint: '/auth/v1/postLogin', data: {auth_id: authId, password: password}}).then(function (resp) {
            if (resp.status === 'success') {
                cookieStorageSet('auth', resp['results'])
                setTimeout(function () {
                    router.push('/app')
                }, 500)
            } else {
                showErrorNotification(resp.message)
            }
        })
    }



    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Sign in to our platform</h3>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={handleLogin}>
                            <InputField label={`Your Email`} inputValue={authId} onChange={e=>setAuthId(e.target.value)} />
                            <InputField label={`Password`} inputValue={password} onChange={e=>setPassword(e.target.value)} type="password" />
                            <ButtonPrimary label={"Login Now"} type={`submit`} />
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 justify-between flex">
                                <div>Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a></div>
                                <div><a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Recovery?</a></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
