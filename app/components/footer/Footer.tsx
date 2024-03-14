import Container from "@/app/components/Container";
import Link from "next/link";

import Image from "next/image";
import { IoLogoYoutube } from "react-icons/io";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="bg-[#D32B2B] text-white p-2">
        <div className="mt-3 sm:mt-0 sm:order-2">
          <Image
            src="/tarjetas.png"
            alt="image"
            width={420}
            height={80}
            className="mx-auto"
          />
        </div>
      </div>
      <footer className=" bg-[#282828]">
        <Container>
          <div className="mx-auto max-w-screen-xl px-8 pb-1 pt-2 sm:px-6 lg:px-8 lg:pt-12">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div>
                <Link href="/">
                  <div className="flex justify-center sm:justify-start ">
                    <Image
                      src="/logoA.png"
                      alt="logo"
                      width={180}
                      height={65}
                      className="mt-0 "
                      style={{ filter: "invert(100%)" }}
                    />
                  </div>
                </Link>

                <p className="mt-3 max-w-md text-center sm:text-left leading-relaxed text-white text-sm mx-auto hidden sm:block">
                  Electrocréditos en una empresa dedicada a la comercialización
                  de electrocréditos y productos del hogar
                </p>

                <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                  <li>
                    <div className="flex justify-center">
                      <Link
                        href="https://www.whatsapp.com/?lang=es_LA"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white"
                      >
                        <span className="sr-only">WhatsApp</span>
                        <FaWhatsapp size={25} />
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="flex justify-center">
                      <Link
                        href="https://www.facebook.com/?locale=es_LA"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white"
                      >
                        <span className="sr-only">Facebook</span>
                        <FaFacebookSquare size={25} />
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="flex justify-center">
                      <Link
                        href="https://www.instagram.com/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white"
                      >
                        <span className="sr-only">Instagram</span>
                        <FaInstagram size={25} />
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-center justify-center">
                      <Link
                        href="https://www.youtube.com/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white"
                      >
                        <span className="sr-only">Youtube</span>
                        <IoLogoYoutube size={25} />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Contacto
                  </p>

                  <ul className="mt-8 space-y-4 text-sm">
                    <li className="flex items-center justify-center sm:justify-start gap-1.5">
                      <Link className="flex items-center text-white" href="#">
                        <IoMdMail size={20} className="mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {" "}
                          electrocreditos@gmail.com
                        </span>
                      </Link>
                    </li>

                    <li className="flex items-center justify-center sm:justify-start gap-1.5">
                      <Link className="flex items-center text-white" href="#">
                        <IoMdCall size={20} className="mr-2" />
                        <span className="text-gray-700 dark:text-gray-300 ">
                          {" "}
                          0123456789
                        </span>
                      </Link>
                    </li>

                    <li className="flex text-white  items-center justify-center sm:justify-start gap-1.5">
                      <IoLocationSharp size={20} className="mr-0" />
                      <address className="text-gray-700 dark:text-gray-300">
                        {" "}
                        Manabí, El Carmen
                      </address>
                    </li>
                  </ul>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Nuestros Productos
                  </p>

                  <ul className="mt-8 space-y-4 text-sm">
                    <li>
                      <Link
                        href="/electrodomesticos"
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      >
                        Electrodomésticos
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/lavanderia"
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      >
                        Lavanderia
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/linea-de-hogar"
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      >
                        Linea de hogar
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/tecnologia"
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                      >
                        Tecnologia
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium text-gray-900 dark:text-white hidden sm:block">
                    Enlaces Útiles
                  </p>

                  <ul className="mt-8 space-y-4 text-sm">
                    <li className="hidden sm:block">
                      <Link
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        href="/faqs"
                      >
                        FAQs
                      </Link>
                    </li>

                    <li className="hidden sm:block">
                      <Link
                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                        href="/support"
                      >
                        Soporte
                      </Link>
                    </li>

                    <li className="hidden sm:block">
                      <Link
                        href="/terms-conditions"
                        className="text-gray-700 transition group-hover:text-slate-100/75 dark:text-white dark:hover:text-white/75"
                      >
                        Términos y Condiciones
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full h-auto mt-6 border-t border-gray-100 pt-3 dark:border-white flex flex-col sm:flex-row items-center justify-between">
              <div className="flex justify-center w-full">
                <p className="text-sm text-white justify-center items-center text-center sm:text-left">
                  Todos los derechos reservados &copy; {currentYear} |
                  Electrocréditos el Ahorro
                </p>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
