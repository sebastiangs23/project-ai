import {
  FiImage,
  FiVideo,
  FiHeadphones,
  FiEdit3,
  FiSearch,
  FiBell,
  FiUser,
  FiGrid,
} from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { MdAutoAwesome } from "react-icons/md";

const navItems = [
  {
    label: "Home",
    icon: <FiGrid />,
    active: true,
  },
  {
    label: "Images",
    icon: <FiImage />,
  },
  {
    label: "Videos",
    icon: <FiVideo />,
  },
  {
    label: "Audio",
    icon: <FiHeadphones />,
  },
  {
    label: "Writer",
    icon: <FiEdit3 />,
  },
];

export function Navbar() {
  return (
    <header className="fixed left-0 top-9 z-40 w-full bg-black">
      <nav className="flex h-20 items-center justify-between px-5 md:px-10">
        <div className="flex items-center gap-8">
          <div lang="ar" className="text-4xl font-black text-[#0A84FF]">
            ع
          </div>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`flex items-center gap-2 text-base font-bold transition ${
                  item.active
                    ? "text-white"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                {item.label}
              </button>
            ))}

            <button
              type="button"
              className="font-heading flex items-center gap-2 text-base font-bold text-[#0A84FF]"
            >
              <span lang="ar" className="text-3xl">
                ع
              </span>
              Araby GPT
            </button>

            <button
              type="button"
              className="flex items-center gap-2 text-base font-bold text-zinc-400 transition hover:text-white"
            >
              <MdAutoAwesome className="text-2xl" />
              Apps
              <span className="rounded-md bg-[#2065D1] px-2 py-1 text-xs font-bold text-white">
                New
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-2xl text-zinc-400 transition hover:text-white"
          >
            <FiSearch />
          </button>

          <button
            type="button"
            className="hidden rounded-xl border border-orange-400 px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-white hover:text-black md:block"
          >
            View Plans ⭐
          </button>

          <button
            type="button"
            className="hidden rounded bg-green-600 px-3 py-2 text-xs font-bold text-white md:block"
          >
            🇸🇦
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="hidden text-2xl text-zinc-500 transition hover:text-white md:block"
          >
            <FiBell />
          </button>

          <button
            type="button"
            aria-label="Profile"
            className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-600 text-2xl text-black">
              <FiUser />
            </span>
            <IoChevronDown className="hidden text-xl md:block" />
          </button>
        </div>
      </nav>
    </header>
  );
}