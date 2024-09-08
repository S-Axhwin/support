"use client";
import Link from "next/link";
// import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@repo/ui/components/ui/sheet";
import { LogOut, MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default function NotNav() {
  const navigate = useRouter();

  return (
    <header className="flex items-center justify-between px-4 py-3 shadow-sm sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Link href="/" className="flex items-center" prefetch={false}>
          <HospitalIcon className="h-8 w-8 text-primary" />
          <span className="ml-2 text-lg font-bold">YuSab</span>
        </Link>
      </div>
      <nav className="hidden space-x-20 md:flex">
        <Link
          href="/"
          className="text-lg font-medium text-black   hover:text-primary"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-lg font-medium   hover:text-primary"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/"
          className="text-lg font-medium   hover:text-primary"
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="/"
          className="text-lg font-medium   hover:text-primary"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-3">
        <div className="">
          <Button
            variant={"secondary"}
            onClick={() => navigate.push("/applyjob")}
          >
            Apply for Job
          </Button>
        </div>
        <LoginLink>
          <Button variant={"outline"}>Login</Button>
        </LoginLink>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-4 p-4">
              <Link
                href="/"
                className="text-sm font-medium  text-black hover:text-primary"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm font-medium  hover:text-primary"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm font-medium  hover:text-primary"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-sm font-medium  hover:text-primary"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function HospitalIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
