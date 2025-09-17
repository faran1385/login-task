"use client"

import {Button} from "@/components/ui/shadcn/button";
import React from "react";
import {useRouter} from "next/navigation";
import {removeUser} from "@/lib/localStorageInteractions/localStorageInteractions";

export const LogoutButton = () => {
    const router = useRouter();
    const logoutHandler = () => {
        removeUser()
        router.push("/login");
    }

    return <Button
        aria-label="Logout"
        onClick={logoutHandler}
        className="cursor-pointer mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
        Logout
    </Button>
}