import '@/app/globals.css';
import {inter} from '@/app/fonts/next_fonts';
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

export default function RootLayout({children,}) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        {children}
        <ToastContainer />
        </body>
        </html>
    );
}
