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
            <div className="xl:hidden">
                <Nav />
                <Link href="/contact">
                <Button>Hire me</Button>
                </Link>
            </div>   
        <div className="xl:hidden">mobile nav</div>
        </div>
        </header>
        );
    };
export default Header;
// 'use client';  // Add this at the top of the file

// import Link from "next/link";
// import { Button } from "./ui/button";
// import Nav from "./Nav";
// import { useState } from "react";

// const Header = () => {
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

//   // Toggle the mobile navigation
//   const toggleMobileNav = () => {
//     setIsMobileNavOpen((prev) => !prev);
//   };

//   return (
//     <header className="py-8 xl:py-12 text-white bg-pink-50/20">
//       <div className="container mx-auto">
//         <Link href="/">
//           <h1 className="text-4xl font-semibold">
//             Dhyana
//             <span className="text-accent">.</span>
//           </h1>
//         </Link>
        
//         <div className="hidden xl:flex items-center gap-8">
//           {/* Desktop Navigation */}
//           <Nav />
//           <Link href="/contact">
//             <Button>Hire me</Button>
//           </Link>
//         </div>

//         {/* Mobile Navigation Toggle */}
//         <div className="xl:hidden flex justify-between items-center">
//           <button onClick={toggleMobileNav} className="text-white">
//             {/* This could be a hamburger icon or any other button */}
//             ☰
//           </button>

//           {/* Mobile Navigation Menu */}
//           {isMobileNavOpen && (
//             <div className="absolute top-20 left-0 w-full bg-pink-50/20 p-4">
//               <Nav />
//               <Link href="/contact">
//                 <Button>Hire me</Button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
