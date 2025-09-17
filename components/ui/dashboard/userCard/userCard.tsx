import React from "react";
import {StoredUserData} from "@/components/ui/login/types";
import {LogoutButton} from "@/components/ui/dashboard/userCard/logoutButton";
import Image from "next/image";


export const UserCard: React.FC<StoredUserData> = ({picture, name, email}) => {

    return (<div
        className="flex md:flex-row flex-col items-center bg-white shadow-md rounded-xl md:p-4 p-6 md:space-y-0 space-y-4">
        <div className={"md:mr-4"}>
            <Image
                width={128}
                height={128}
                className="md:w-32 md:h-32 w-24 h-24 rounded-full object-cover"
                src={picture.large}
                alt={`${name} picture`}
            />
        </div>
        <div className={"flex flex-col"}>
            <h1 className="text-xl font-semibold break-words">Welcome, {name} 👋</h1>
            <p className="text-gray-600 break-all" aria-label={`User email: ${email}`}>{email}</p>
            <LogoutButton/>
        </div>
    </div>)
}