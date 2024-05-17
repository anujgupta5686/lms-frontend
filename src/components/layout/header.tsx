import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Input } from "../ui/input";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { NavbarLinks } from "../../data/navbar-links";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link, useNavigate, useLocation, matchPath } from "react-router-dom";
import { Button } from "../ui/button";

interface NavbarLink {
    title: string;
    path?: string;
}

const Header: React.FC = () => {
    const [userLogin, setUserLogin] = useState<boolean>(false);
    const [userAuth, setUserAuth] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();

    const matchRoute = (route: string | undefined) => {
        return route ? !!matchPath({ path: route }, location.pathname) : false;
    };

    return (
        <nav className="flex justify-between px-5 lg:px-12 items-center h-[72px] py-2 md:py-5 border-b">
            <Link to="/">
                <img src={logo} height={100} width={100} loading="lazy" />
            </Link>
            <div className="flex gap-2 items-center p-1 justify-center">
                <nav className="hidden md:block">
                    <ul className="flex gap-x-6 text-richblack-25">
                        {NavbarLinks.map((link: NavbarLink, index: number) => (
                            <li key={index}>
                                {link.title === "Books" ? (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <button>
                                                <h1>Books</h1>
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {/* <DropdownMenuSeparator /> */}
                                            <DropdownMenuItem onClick={() => alert("Download started")}>
                                                Mathematics
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => alert("Download started")}>
                                                ReactJS
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => alert("Download started")}>
                                                Java 6 Edition
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => alert("Download started")}>
                                                Machine Learning
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => alert("Download started")}>
                                                English
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <Link to={link.path || ""}>
                                        <p
                                            className={`${matchRoute(link.path)
                                                ? "text-[#bc6c25]"
                                                : "text-slate-800"
                                                }`}
                                        >
                                            {link.title}
                                        </p>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {userAuth && (
                <div className="info flex gap-3 lg:gap-8 py-2 unselectable">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-full">
                                <FaShoppingCart className="size-6 md:size-7" />
                                <div className="absolute inline-flex items-center justify-center size-5 md:size-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full right-0 top-2 md:top-3">
                                    1
                                </div>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {/* <Notification /> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="profile lg:px-1 bg-gray-200 rounded-full flex items-center my-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="flex gap-4 justify-start items-center sm:p-1">
                                    <span>
                                        <Avatar>
                                            <AvatarImage
                                                src="https://github.com/shadcn.png"
                                                alt="@shadcn"
                                            />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </span>
                                    <div className="hidden md:flex flex-col">
                                        <div className="text-neutral-800 text-sm lg:text-base font-medium min-w-[150px] xl:min-w-[180px]">
                                            <p>Anuj Kumar Gupta</p>
                                        </div>
                                        <div className="text-neutral-400 text-sm lg:text-base font-normal capitalize">
                                            <p>Admin</p>
                                        </div>
                                    </div>
                                    <span className="hidden md:block">
                                        <IoMdArrowDropdown className="text-xl" />
                                    </span>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mt-1 border mr-1 min-w-[150px] md:min-w-[200px] xl:min-w-[250px]">
                                <DropdownMenuItem onClick={() => navigate("/my-account")}>
                                    My Account
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            )}
            {!userLogin && (
                <div>
                    <Button variant={"ghost"} className="border border-slate-500">
                        Sign-in
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Header;