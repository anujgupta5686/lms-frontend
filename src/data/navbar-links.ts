interface NavbarLink {
  title: string;
  path?: string;
}

export const NavbarLinks: NavbarLink[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Books",
    // path: '/books',
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];
