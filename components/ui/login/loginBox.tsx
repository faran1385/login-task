"use client"

import {Input} from "@/components/ui/shadcn/input";
import {Button} from "@/components/ui/shadcn/button";
import {ChangeEvent, FormEvent, useState} from "react";
import axios from "axios";
import {LoadingSpinner} from "@/components/ui/loadingSpinner/loadingSpinner";
import {UserResponse} from "@/components/ui/login/types";
import {useRouter} from "next/navigation";
import {setUser} from "@/lib/localStorageInteractions/localStorageInteractions";


const iranPhoneRegex = /^(?:09\d{9}|\+989\d{9}|00989\d{9})$/

export const LoginBox = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()


    const getUserInfo = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("https://randomuser.me/api/?results=1&nat=us")

            // set fetched user
            const data: UserResponse = response.data
            if (data.results.length === 0) throw new Error("User not found");
            setUser(data.results[0])

            router.push("/")
        } catch (e) {
            setError("Something went wrong");
        }
        setIsLoading(false);
    }

    const registerUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (phoneNumber.length > 0) {
            if (!iranPhoneRegex.test(phoneNumber)) {
                setError("Phone number isn't valid");
            } else {
                await getUserInfo();
            }
        } else {
            setError("Phone number is required");
        }
    }

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value.trim())
        setError(null)
        setIsEmpty(e.target.value.trim().length === 0);
    }

    return <>
        <form onSubmit={(e) => registerUser(e)} className="w-full max-w-sm rounded-2xl bg-background p-6 shadow-lg">
            <h1 className="mb-4 text-xl font-semibold text-foreground">Login</h1>
            <Input
                id="phone-number"
                value={phoneNumber ?? undefined}
                onChange={inputChangeHandler}
                placeholder="Phone number"
                className={`${error ? `border-red-500` : ``} outline-0 shadow-none focus-visible:shadow transition-shadow`}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "phone-error" : undefined}
            />

            {error && (
                <span id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
                {error}
            </span>
            )}

            {!isLoading ?
                (<Button disabled={isEmpty} className="transition-colors duration-200 disabled:bg-gray-400 disabled:text-gray-800 cursor-pointer mt-4 w-full">Submit</Button>) :
                (<Button disabled={true} className=" disabled:bg-gray-400 mt-4 w-full">
                    <LoadingSpinner/>
                </Button>)}

        </form>
    </>
}