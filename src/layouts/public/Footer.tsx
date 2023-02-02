import {
  Google,
  Twitter,
  Instagram,
  LinkedIn,
  Facebook,
} from "@mui/icons-material";
import Link from "next/link";
import { LOGO } from "../../assets";

const studentFooter = [
  {
    id: 1,
    contents: [
      { id: 1.1, title: "Quick Links", main: true, link: "#" },
      { id: 1.2, title: "About Us", link: "/about" },
      { id: 1.3, title: "Contact Us", link: "/contact" },
      { id: 1.4, title: "Privacy Policy", link: "#" },
    ],
  },
  {
    id: 2,
    contents: [
      { id: 2.0, title: "Products", main: true, link: "#" },
      { id: 2.1, title: "Aeps", link: "/products#aeps" },
      { id: 2.2, title: "Micro ATM", link: "/products#micro-atm" },
      { id: 2.3, title: "White-label ATM", link: "/products#atm" },
      { id: 2.4, title: "Payment Services", link: "/products#csp" },
    ],
  },
];

const studentFooterSocialIcons = [
  {
    id: 1,
    icon: (
      <Facebook
        fontSize="small"
        className="text-[#5C7081] group-hover:text-theme"
      />
    ),
    link: "https://www.facebook.com/TruyaltyVentures/",
  },
  {
    id: 3,
    icon: (
      <Instagram
        fontSize="small"
        className="text-[#5C7081] group-hover:text-theme"
      />
    ),
    link: "https://www.instagram.com/truyaltyventures/",
  },
  {
    id: 4,
    icon: (
      <LinkedIn
        fontSize="small"
        className="text-[#5C7081] group-hover:text-theme"
      />
    ),
    link: "https://www.linkedin.com/company/truyalty-ventures/",
  },
];

const StudentFooter = () => {
  return (
    <section className="w-full md:py-12 py-8">
      <div className="main-container flex md:flex-row flex-col justify-start gap-6 md:justify-between pb-12">
        <div className="flex flex-col gap-6 max-w-[20rem]">
          <img className="w-44 object-contain" src={LOGO.src} alt="logo" />
          <p className="text-sm font-semibold text-gray-500">
            Truyalty Ventures (P) Limited is a Fast Growing Fin-Tech company
          </p>
          <div className="flex gap-2">
            {studentFooterSocialIcons?.map((item) => (
              <Link target="_blank" href={item?.link}>
                <span
                  className="bg-gray-200 px-3 py-1 group rounded-full hover:scale-110 cursor-pointer ease-in-out transition-all"
                  key={item?.id}
                >
                  {item?.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {studentFooter?.map((item) => (
          <ul className="flex flex-col gap-4" key={item?.id}>
            {item?.contents?.map((data) => (
              <li
                key={data?.id}
                className={`${
                  !data?.main
                    ? "text-gray-500 hover:text-theme hover:scale-105 cursor-pointer ease-in-out transition-all"
                    : "font-extrabold"
                } font-semibold text-sm`}
              >
                <Link href={data?.link}>{data?.title}</Link>
              </li>
            ))}
          </ul>
        ))}
        <div>
          <p className="text-sm font-extrabold">Contact</p>
          <p className="text-sm font-semibold text-gray-500 mt-4">
            24x7 Helpdesk
          </p>
          <p className="text-sm font-semibold text-gray-500">
            truyaltyventures@gmail.com
          </p>
          <p className="text-sm font-semibold text-gray-500 mt-4">
            @Bhubaneswar,Nayapalli,Odisha
          </p>
        </div>
        {/* <ul className="">
          <li className="font-extrabold text-sm">Our Subsidiary</li>
          <li className="text-sm font-semibold text-gray-600 mt-3 hover:text-theme cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
            @Truyalty Superfund
          </li>
          <li className="text-sm font-semibold text-gray-600 mt-2 hover:text-theme cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
            @Truyalty Superfund
          </li>
          <li className="text-sm font-semibold text-gray-600 mt-2 hover:text-theme cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
            @Truyalty Superfund
          </li>
        </ul> */}
      </div>
      <div className="main-container md:text-sm text-gray-600 text-xs md:w-1/2 w-full">
        <p className="text-center">
          Never share your password, card number, expiry date, CVV, PIN, OTP or
          other confidential information with anyone even if the person claims
          to be from Truyalty Ventures and Trupe
        </p>
        <p className="mt-3 text-center">
          Truyalty Ventures is not a bank but a technology platform for digital
          financial services and advisory in partnership with RBI licensed Banks
        </p>
        <p className="mt-3 text-center">
          Corporate Identification Number is (CIN) U72900OR2020PTC033071
        </p>
      </div>
      <div className="main-container mt-4 border-t-[1px] pt-6">
        <p className="text-center md:text-sm text-xs">
          © Copyright {new Date().getFullYear()} Truyalty Ventures Private
          Limited. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default StudentFooter;
