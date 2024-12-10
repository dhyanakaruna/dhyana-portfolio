import Link from"next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto">
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Dhyana 
                <span className="text-accent">.</span>    
            </h1></Link>
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                <Button>Hire me</Button>
                </Link>
            </div>
        </div>
        </header>
        );
    };
export default Header;