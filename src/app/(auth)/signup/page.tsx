"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="w-full min-h-120 flex flex-col gap-2 items-center justify-center">
        <BeatLoader color="#000" loading={true} size={10} />
        Loading...
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-center mb-1 text-2xl font-bold">
        Welome to {process.env.NEXT_PUBLIC_APP_NAME}!
      </h1>
      <span className="text-center block mb-5">Please register!.</span>
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
      <Button className="mt-4 w-full h-12" size={"lg"} type="submit">
        CONTINUE
      </Button>

      <div className="my-4 w-full flex justify-center items-center relative">
        <span className="block text-center py-2 w-[100px] z-10 bg-white">
          OR
        </span>
        <span className="h-[1px] w-full bg-gray-200 block absolute"></span>
      </div>

      <div className="text-center">
        <span className="text-sm text-gray-500">
          Already have an account?
          <Link href="/login" className="text-blue-500 hover:underline ml-2">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpPage;
