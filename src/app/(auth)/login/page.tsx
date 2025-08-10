"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [pincode, setPinCode] = useState("");
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="w-full min-h-120 flex flex-col gap-2 items-center justify-center">
        <BeatLoader color="#000" loading={true} size={10} />
        Loading...
      </div>
    );

  const handleLogin = () => {
    event?.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsValidEmail(true);
      console.log("Email is valid:", email);
    } else {
      console.log("Invalid email format:", email);
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-center mb-5 text-2xl font-bold">
        Sign in to {process.env.NEXT_PUBLIC_APP_NAME}!
      </h1>

      {!isValidEmail ? (
        <>
          <label className="py-2 block" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </>
      ) : (
        <>
          <label className="py-2 block" htmlFor="email">
            Enter PIN code
          </label>
          <div className="w-full flex justify-center items-center">
            <InputOTP maxLength={6} onChange={(value) => setPinCode(value)}>
              <InputOTPGroup>
                <InputOTPSlot className="h-12 w-12" index={0} />
                <InputOTPSlot className="h-12 w-12" index={1} />
                <InputOTPSlot className="h-12 w-12" index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot className="h-12 w-12" index={3} />
                <InputOTPSlot className="h-12 w-12" index={4} />
                <InputOTPSlot className="h-12 w-12" index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </>
      )}
      {!isValidEmail ? (
        <Button
          disabled={!email}
          className="mt-10 w-full h-12 uppercase"
          size={"lg"}
          type="submit"
          onClick={handleLogin}
        >
          CONTINUE
        </Button>
      ) : (
        <Button
          disabled={!email}
          className="mt-4 w-full h-12 uppercase"
          size={"lg"}
          type="submit"
          onClick={() => console.log(pincode)}
        >
          SIGN IN
        </Button>
      )}

      <div className="my-4 w-full flex justify-center items-center relative">
        <span className="block text-center py-2 w-[100px] z-10 bg-white">
          OR
        </span>
        <span className="h-[1px] w-full bg-gray-200 block absolute"></span>
      </div>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500">
          Do you want to create an account?
          <Link href="/signup" className="text-blue-500 hover:underline ml-2">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
