import Container from "@/app/components/Container";
import Link from "next/link";
import Image from "next/image";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import SearchBar from "@/app/search/SearchBar";
import Menu from "@/app/components/nav/Menu";
import { BiSolidOffer } from "react-icons/bi";

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div
      className="
      top-0
      w-full
      bg-slate-40
      z-20
      shadow-sm
      relative
      
      "
    >
      <div className="top-0 w-full bg-slate-40 z-25 shadow-sm">
        <div className="bg-[#D32B2B] text-white">
          <p className="text-center text-sm font-medium pt-1">
          <span className="inline-block mr-1"><BiSolidOffer /></span>
            Productos de oferta  | {""}
            <Link href="/productos" className="inline-block underline">
              Revisa nuestras promociones!
            </Link>
            
          </p>
        </div>
        <Container>
          <div className=" flex items-center justify-between ">
            <Link href="/">
              <Image
                src="/logoA.png"
                alt="logo"
                width={180}
                height={65}
                className="mb-0 "
                style={{ width: "180px", height: "55px" }}
              />
            </Link>
            

            <div className="hidden md:block">
              <SearchBar />
            </div>
  
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <div className="flex items-center gap-[0.8rem] md:gap-5 cursor-pointer">
                <UserMenu currentUser={currentUser} />
                <CartCount />
              </div>
            </div>
          </div>
        </Container>
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;
