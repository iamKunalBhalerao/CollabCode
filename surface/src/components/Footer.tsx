import { LogoIcon } from '@/components/logo'
import Link from 'next/link'
import { ThemeSwitcher } from './theme-switcher'
import { SocialMedias } from './social-medias'

const links = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact Us", href: "#contact" },
]

export default function Footer() {
    return (
        <footer className="bg-background @container py-12">
            <div className="mx-auto max-w-2xl px-6">
                <div className="flex flex-col">
                    <Link
                        href="/"
                        aria-label="go home"
                        className="hover:bg-foreground/5 -ml-1.5 flex size-8 rounded-lg *:m-auto">
                        <LogoIcon
                            uniColor
                            className="size-5"
                        />
                    </Link>
                    <nav className="my-8 flex flex-col gap-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex justify-between">
                        <ThemeSwitcher />
                        <SocialMedias />
                    </div>

                    <p className="text-muted-foreground border-foreground/10 mt-2 border-t border-dashed pt-6 text-sm">&copy; {new Date().getFullYear()} Kunal Bhalerao. </p>
                </div>
            </div>
        </footer>
    )
}
