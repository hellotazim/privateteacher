import {Poppins} from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import {AppWrapper} from "@/context/themeContext";
import {Slide, ToastContainer } from "react-toastify";


const baseFont = Poppins({subsets: ['latin'], weight: ['300']}); // Inter({subsets: ["latin"]})

export const metadata = {
    title: "Main Layout",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={baseFont.className}>
            <ToastContainer position="top-right" autoClose={2000} hideProgressBar={true} newestOnTop={false} draggable={false} closeOnClick={true} pauseOnHover={false} transition={Slide}/>
            <AppWrapper>{children}</AppWrapper>
        </body>
        </html>
    );
}
