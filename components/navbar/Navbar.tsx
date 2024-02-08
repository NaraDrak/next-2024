import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

export const Navbar = () => {

    const navItems = [
        { path: '/about', text: 'About' },
        { path: '/pricing', text: 'Pricing' },
        { path: '/contact', text: 'Contact' }
    ]

    const temporalAsync = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)
            }, 2000);
        }
        )
    }

    temporalAsync()

    return (
        <nav>
            <Link href="/">Home</Link>
            {
                navItems.map(navItem => (
                    <ActiveLink key={navItem.path} path={navItem.path} text={navItem.text} />
                ))
            }
        </nav>
    )
}
