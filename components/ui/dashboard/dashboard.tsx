"use client"

import {UserCard} from "@/components/ui/dashboard/userCard/userCard";
import {useEffect, useState} from "react";
import {getUser} from "@/lib/localStorageInteractions/localStorageInteractions";
import {StoredUserData} from "@/components/ui/login/types";
import {useRouter} from "next/navigation";

export const Dashboard = () => {
    const [user, setUser] = useState<null | StoredUserData>(null)
    const router = useRouter();

    useEffect(() => {
        const user = getUser();
        if (!user) {
            router.push("/login");
        } else {
            setUser(user);
        }
    }, []);

    if (!user) return null

    return (<>
        <UserCard {...user}/>
    </>)
}