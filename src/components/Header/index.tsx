type HeaderProps = { name: number; id?: number };

function Header({ name, id }: HeaderProps) {
  return (
    <div onClick={() => (name = 1000)}>
      <h1>{name}</h1>
      <nav>
        <ul className="!flex gap-4 items-center w-[200px] md:bg-red-600 p-abc">
          <li className="p-2">
            <a href="" className="hover:opacity-70">
              HOME
            </a>
          </li>
          <li className="p-2">
            <a href="" className="hover:opacity-70">
              BAND
            </a>
          </li>
          <li className="p-2">
            <a href="" className="hover:opacity-70">
              TOUR
            </a>
          </li>
          <li className="p-2">
            <a href="" className="hover:opacity-70">
              ABOUT
            </a>
          </li>
          <li className="p-2">
            <a href="" className="hover:opacity-70">
              PHONE
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;