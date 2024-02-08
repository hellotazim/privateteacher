"use client"


import {InputField} from "@/components/inputField";
import {ButtonPrimary} from "@/components/buttons";
import {useState} from "react";
import {HttpRequestPost} from "@/helperFiles/httpRequest";
import {useRouter} from "next/navigation";
import {cookieStorageSet} from "@/helperFiles/cookieStorage";


export default function Login() {


    const [authId, setAuthId] = useState('super@managebeds.com');
    const [password, setPassword] = useState('33444');
    const router = useRouter();


    const handleLogin = async (e) => {
        e.preventDefault();

        // await HttpRequestGet({endpoint: '/geo/v1/getCountryList'}).then(function (resp){
        //     console.log('country resp', resp)
        // })

        await HttpRequestPost({endpoint: '/auth/v1/postLogin', data: {auth_id: authId, password: password}}).then(function (resp) {
            console.log('country resp', resp)
            if (resp.status === 'success') {
                console.log('called')
                cookieStorageSet('auth', resp['results'])
                setTimeout(function () {
                    router.push('/app')
                }, 500)
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
                            <InputField label={`Your Email`} inputValue={authId} />
                            <InputField label={`Password`} inputValue={password} type="password" />
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
