"use client";
import React from "react";
import { useState } from "react";
import MenuLink from "./MenuLink";
import useLoginModal from "@/hooks/useLoginModal";
import useSignUpModal from "@/hooks/useSignUpModal";
import LogoutButton from "@/components/navbar/LogoutButton";
import { useRouter } from "next/navigation";

interface UserNavProps {
    userId?: string | null;
}

const UserNav: React.FC<UserNavProps> = ({ userId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const loginModal = useLoginModal();
    const signUpModal = useSignUpModal();
    const router = useRouter();

    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button
                className="flex items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
                <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="w-[220px] absolute top-[60px] right-0 border bg-white border-gray-300 rounded-xl shadow-md flex flex-col cursor-pointer">
                    {userId ? (
                        <>
                            <MenuLink
                                label="Inbox"
                                onClick={() => {
                                    setIsOpen(false);
                                    router.push("/inbox");
                                }}
                            />
                            <MenuLink
                                label="My Properties"
                                onClick={() => {
                                    setIsOpen(false);
                                    router.push("/my/properties");
                                }}
                            />
                            <MenuLink
                                label="My Reservations"
                                onClick={() => {
                                    setIsOpen(false);
                                    router.push("/my/reservations");
                                }}
                            />
                            <MenuLink
                                label="My Favorites"
                                onClick={() => {
                                    setIsOpen(false);
                                    router.push("/my/favorites");
                                }}
                            />
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            <MenuLink
                                label="Login"
                                onClick={() => {
                                    setIsOpen(false);
                                    loginModal.open();
                                }}
                            />
                            <MenuLink
                                label="Sign up"
                                onClick={() => {
                                    setIsOpen(false);
                                    signUpModal.open();
                                }}
                            />
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserNav;
