import '@/app/globals.css';
import {inter} from '@/app/fonts/next_fonts'

export default function RootLayout({children,}) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>{children}</body>
        </html>
    );
}
