import {LoginBox} from "@/components/ui/login/loginBox";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Login",
};


export default function Login() {
    return <>
        <div className="flex px-2 min-h-screen items-center justify-center bg-gray-50">
            <LoginBox/>
        </div>
    </>
}