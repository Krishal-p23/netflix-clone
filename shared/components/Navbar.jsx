"use client";

import { assets } from "@/assets/assets";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./DropdownMenu";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {

    const { data: session } = useSession();

    return (
        <div className="fixed top-0 w-full flex justify-between px-12 py-4 bg-transparent transition-colors duration-1000">
            <div className="flex gap-8 items-center">
                <h1 className="text-[#e50914] text-[25px] cursor-pointer">Netflix</h1>
                <ul className="flex text-sm gap-5">
                    <li className="text-[#e5e5e5] cursor-pointer hover:text-[#b3b3b3] transition-colors">Home</li>
                    <li className="text-[#e5e5e5] cursor-pointer hover:text-[#b3b3b3] transition-colors">Shows</li>
                    <li className="text-[#e5e5e5] cursor-pointer hover:text-[#b3b3b3] transition-colors">Movies</li>
                    <li className="text-[#e5e5e5] cursor-pointer hover:text-[#b3b3b3] transition-colors">Games</li>
                </ul>
            </div>
            <div className="flex gap-[15px] items-center">
                <button className="cursor-pointer">
                    <Sparkle className="text-white" />
                </button>
                <Image
                    className="cursor-pointer"
                    src={assets.search_icon}
                    alt="search"
                    width={24}
                    height={24} />
                <Image
                    className="cursor-pointer"
                    src={assets.bell_icon}
                    alt="notification"
                    width={24}
                    height={24} />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="text-white cursor-pointer">
                            <Image
                                className="rounded-[4px]"
                                src={assets.profile_image}
                                alt="profile"
                                width={32}
                                height={32} />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#000000e6] text-white border-none w-[200px]">
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Image
                                    className="rounded-[4px]"
                                    src={assets.profile_image}
                                    alt="profile"
                                    width={32}
                                    height={32} />
                                <span>{session?.user?.name}</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator className="bg-[#ffffff40]" />
                        <DropdownMenuGroup>
                            <DropdownMenuItem
                                className="text-[13px] px-2.5 py-2 flex justify-between"
                                onClick={() => signOut()}>
                                Sign Out of Netflix
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}

export default Navbar;