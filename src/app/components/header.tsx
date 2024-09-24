import Link from "next/link";

export default function Header() {
  return (
    <header className="flex-row h-tile px-tile justify-between">
      <Link href="/" className="w-tile h-tile bg-brand rounded-full"/>
      <button 
        className="size-tile bg-background rounded-full border-backgroundSecondary border flex flex-col gap-quarter justify-center items-center"
      >
        <span className="sr-only">Menu</span>
        <div className="gap-2">
            <hr className="w-half"/>
            <hr className="w-half"/>
            <hr className="w-quarter"/>
        </div>
      </button>
      <Menu />
    </header>
  );
}

function Menu() {
    return <></>
    return (
        <nav
            popover=""
            role="menu" 
            id="menu" 
            className="w-full h-full"
        >
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Work</Link>
            <Link href="/">Services</Link>
        </nav>
    )
}
