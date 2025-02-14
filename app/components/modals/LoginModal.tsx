"use client";

import Modal from "./Modal";

import {useRouter} from "next/router";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import SubmitButton from "@/app/components/forms/SubmitButton";
import { handleLogin } from "@/app/lib/actions";

import apiService from "@/app/services/apiService";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const content = (
    <div className="">
      <h2 className="mb-6 text-2xl font-semibold">Welcome to Airdnd</h2>
      <form action="" className="space-y-4">
        <input
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
          placeholder="Password"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-60">
          Error
        </div>
        <SubmitButton
          label="Continue"
          onClick={() => {
            console.log("Login");
          }}
          className="w-full"
        />
      </form>
    </div>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      label="Login"
      content={content}
      close={loginModal.close}
    />
  );
};

export default LoginModal;
