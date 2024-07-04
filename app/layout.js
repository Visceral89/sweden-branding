import { Noto_Sans } from "next/font/google";
import "./globals.scss";
import layout from "@/app/layout.module.scss";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Sweden Grid",
	description: "A simple grid",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={noto.className}>
				<div className={layout.gridContainer}>{children}</div>
			</body>
		</html>
	);
}
