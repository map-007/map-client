import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { AUTH_ROUTES } from "@/config/routes";

const Intro = () => {
  return (
    <div>
      <div className="gap-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">
          Make Easy Your Buy Sell &
          <span className="text-blue-500"> Trade Cryptocurrency</span>
        </h1>
        Uncover the ultimate synergy of trading and investment success with our
        all-in-one platform - where seamless functionality meets informed
        decision-making. Dive into an effortless trading experience designed for
        your success.
      </div>
      <Link href={AUTH_ROUTES.SIGNUP}>
        <Button className="mt-5 uppercase" size={"lg"}>
          Register Now <MoveRight />
        </Button>
      </Link>
    </div>
  );
};

export default Intro;
