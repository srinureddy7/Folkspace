const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-[999] shadow-sm">
      <section className="relative bg-white main-container flex justify-between py-8">
        <p className="font-bold text-2xl tracking-wide text-theme">Folkspace</p>
        <ul className="flex gap-8 items-center">
          {menus?.map((item) => (
            <li className="tracking-wide text-sm font-semibold text-gray-600 cursor-pointer">
              {item?.title}
            </li>
          ))}
          <li>
            <button className="px-4 py-2 bg-theme text-white rounded-lg text-sm tracking-wide font-medium hover:scale-105 ease-in-out transition-all duration-200">
              GET STARTED
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;

const menus = [
  { id: 1, title: "Our Story", link: "/" },
  { id: 2, title: "Membership", link: "/" },
  { id: 3, title: "Sign In", link: "/" },
  { id: 4, title: "Write", link: "/" },
];
