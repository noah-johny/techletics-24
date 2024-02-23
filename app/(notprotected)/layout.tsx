import { Connect, SocialConnect } from "@/components/connect";
import Copyright from "@/components/copyright";
import Navbar from "@/components/navbar";
import SectionLayout from "@/layouts/section-layout";

export default function NotProtectedLayout({ children }: { children: any }) {
    return (
        <>
            <SectionLayout navbar float transparent glassMorphism>
                <Navbar />
            </SectionLayout>

            {children}

            <footer id="contact" className="w-full">
                <Connect />
                <SocialConnect />
                <Copyright />
            </footer>
        </>
    )
}