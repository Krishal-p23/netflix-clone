"use client";

import { assets } from "@/assets/assets";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Profiles = () => {

    const { data: session } = useSession();
    const router = useRouter();

    const handleProfileClick = () => {
        router.push("/");
    }

    return (
        <div className="flex flex-col w-full h-screen justify-center items-center gap-8">
            <h1 className="text-white text-[50.4px]">
                Who's watching?
            </h1>
            <div className="flex flex-col gap-3" >
                <Image
                    className="cursor-pointer border-[3.24px] boreder-[#e5e5e5] rounded-sm overflow-hidden"
                    src={assets.profile_image}
                    height={144}
                    width={144}
                    alt="profile"
                    onClick={handleProfileClick} />
                <h3 className="text-[#e5e5e5] text-[18.72px] text-center">
                    {session?.user?.name || "Loading..."}
                </h3>
            </div>
        </div>
    )
}

export default Profiles;
