"use client";

import { useRouter } from "next/navigation";
import { resetAuthCookies } from "@/lib/actions";

import MenuLink from "@/components/navbar/MenuLink";

const LogoutButton: React.FC = () => {
    const router = useRouter();
    const submitLogout = async () => {
        await resetAuthCookies();

        router.push("/");
    };
    return <MenuLink label={"Log out"} onClick={submitLogout} />;
};

export default LogoutButton;
