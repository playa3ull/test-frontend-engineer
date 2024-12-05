import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";

const SearchBar: React.FC = () => {
  return (
    <section className="">
      <div className="container mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo of the website"
              className="w-auto py-6"
            />
          </Link>
        </div>

        <div className="col-span-7 flex items-center">
          <div className="mx-auto  w-screen max-w-screen-md">
            <form className="relative mx-auto flex w-full  items-center justify-between rounded-md border shadow-sm">
              <input
                type="name"
                name="search"
                className="h-3 w-full rounded-md py-1 pr-40 pl-12 outline-none "
                placeholder="Search Products..."
              />

              <button type="submit" className="inline-flex h-8 items-center">
                <svg
                  className="absolute left-2 block h-5 w-5  text-gray-400"
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
                  <circle cx="11" cy="11" r="8" className=""></circle>
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    className=""
                  ></line>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="col-span-3 flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="font-normal leading-[20px]">
            <p>Call us now </p>
            <p>+1 01 444 55 99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
