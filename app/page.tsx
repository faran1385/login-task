import {Dashboard} from "@/components/ui/dashboard/dashboard";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Dashboard",
};

export default function Home() {

    return (
        <div className=" w-full h-screen flex flex-col bg-gray-50 px-2 items-center justify-center min-h-screen p-4">
            <Dashboard/>
        </div>
    );
}
