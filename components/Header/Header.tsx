import Link from "next/link";
import Image from "next/image";
import SearchInput from "../SearchInput/SearchInput";

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => {
  return (
    <div className="sticky flex top-0 z-40 w-full h-24 bg-zinc-900">
      <div className="flex justify-between w-full h-full m-auto max-w-7xl px-4">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <div className="hidden md:block">
              <Image width="150" height="50" src="/rmdb-logo.svg" alt="logo" />
            </div>
            <div className="block md:hidden pt-2">
              <Image
                width="44"
                height="44"
                src="/rmdb-logo-small.svg"
                alt="logo"
              />
            </div>
          </div>
        </Link>
        {setQuery ? (
          <div className="flex items-center relative">
            <SearchInput setQuery={setQuery} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
