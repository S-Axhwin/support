"use client";
import Link from "next/link";
import { Button } from "@repo/ui/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@repo/ui/components/ui/sheet";
import { LogOut, MenuIcon, User, ShieldCheck } from "lucide-react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
// import NotNav from "./NotNav";

export default function Component() {
  const navigate = useRouter();
  const { isAuthenticated } = useKindeBrowserClient();

  //   if (!isAuthenticated) {
  //     return <NotNav />;
  //   }

  return (
    <header className="flex items-center justify-between px-4 py-3 shadow-sm sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Link href="/" className="flex items-center" prefetch={false}>
          <ShieldCheck className="h-8 w-8 text-green-400" />
          <span className="ml-2 text-lg font-bold text-green-600">Govt</span>
        </Link>
      </div>
      <nav className="hidden space-x-20 md:flex">
        <Link
          href="/"
          className="text-lg font-medium text-black hover:text-primary"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="text-lg font-medium  text-black hover:text-primary"
          prefetch={false}
        >
          dashboard
        </Link>
        <Link
          href="/"
          className="text-lg font-medium  text-black hover:text-primary"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/"
          className="text-lg font-medium  text-black hover:text-primary"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-4 gap-3">
        <div onClick={() => navigate.push("/alldocs")}>
          <SearchIcon />
        </div>

        {!isAuthenticated ? (
          <LoginLink>
            <Button variant={"outline"}>Login</Button>
          </LoginLink>
        ) : (
          <>
            <Link href={"/profile"}>
              <User />
            </Link>
            <LogoutLink>
              <Button variant={"destructive"} className="flex gap-1">
                <LogOut size={"icon"} />
                Logout
              </Button>
            </LogoutLink>
          </>
        )}

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
                href="#"
                className="text-sm font-medium  hover:text-primary text-black"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm font-medium light:text-gray-600 hover:text-primary"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm font-medium light:text-gray-600 hover:text-primary"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-sm font-medium light:text-gray-600 hover:text-primary"
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
