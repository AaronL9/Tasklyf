import { useEffect } from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { LogOut, Settings, User } from "lucide-react";

function RootLayout() {
  const navigate = useNavigate();
  const pathName = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
  return (
    <>
      <header className="flex w-full justify-between px-8 py-4 font-heading">
        <div
          className="flex items-center gap-4 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo.svg" alt="" />
          <span className="font-heading text-xl font-extra-bold">Tasklyf</span>
        </div>
        <nav className="flex items-center gap-7 font-body font-semi-bold">
          <button className="rounded-md bg-blue px-4 py-2 text-white">
            Sign up as pro
          </button>
          <Link to="/booking">Booking</Link>
          <Link to="/inbox">Inbox</Link>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="focus:cursor-pointer" asChild={true}>
                <div className="flex items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#69DFE7]">
                    JD
                  </div>
                  <p>John</p>
                  <img src="/caret-down.svg" alt="" />
                </div>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="flex gap-2 text-primary-grey">
                  <User /> Profile
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="flex gap-2 text-primary-grey">
                  <Settings /> Settings
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="flex gap-2 text-[red] focus:bg-[#ff000013] focus:text-[red]">
                  <LogOut color="red" /> Logout
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </nav>
      </header>
      <main className="flex w-full max-w-[1122px] flex-col items-center">
        <Outlet />
      </main>
      <footer className="mt-auto flex h-[617px] w-full justify-center rounded-tl-lg rounded-tr-lg bg-[#00244C] text-white">
        <div className="flex h-full w-[1066px] flex-col items-center justify-center">
          <section className="mb-32 flex w-full justify-between">
            <div className="text-[15px] font-[300] leading-8">
              <h2 className="text-[18px] font-semi-bold">About Us</h2>
              <p>Company</p>
              <p>Careers</p>
              <p>News</p>
            </div>
            <div className="text-[15px] font-[300] leading-8">
              <h2 className="text-[18px] font-semi-bold">Support</h2>
              <p>Contact Us</p>
              <p>Knowledge Base</p>
              <p>Product Help Center</p>
            </div>
            <div className="text-[15px] font-[300] leading-8">
              <h2 className="text-[18px] font-semi-bold">Become a Partner</h2>
              <p>Agencies</p>
              <p>Associations</p>
              <p>Franchises</p>
              <p>Affilates</p>
              <p>Offers</p>
            </div>
            <div className="text-[15px] font-[300] leading-8">
              <h2 className="text-[18px] font-semi-bold">Pros</h2>
              <p>Sign up as a pro</p>
              <p>Community</p>
              <p>Pro Resources</p>
              <p>Success stories</p>
              <p>Pro reviews</p>
            </div>
          </section>
          <hr className="w-full" />
          <section className="mt-20 flex w-full items-center gap-2">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
              <img src="logo.svg" />
            </div>
            <p className="text-[24px] font-semi-bold">© 2024 Tasklyf, Inc.</p>
          </section>
        </div>
      </footer>
    </>
  );
}

export default RootLayout;
