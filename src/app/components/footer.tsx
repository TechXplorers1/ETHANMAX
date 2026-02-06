import { motion } from "motion/react";

export function Footer() {
    return (
        <footer className="bg-secondary py-12">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
                <p
                    className="text-sm text-muted-foreground tracking-wide"
                    style={{ fontFamily: "var(--font-sans)" }}
                >
                    © 2026 EthanMax llc. Thoughtfully designed for your home.
                </p>
                <p
                    className="text-xs text-muted-foreground tracking-wide mt-2 opacity-80"
                    style={{ fontFamily: "var(--font-sans)" }}
                >
                    Developed by Techxplorers Private Limited
                </p>
            </div>
        </footer>
    );
}
