import { Logo } from "../../components/logo";

export const Footer = () => (
	<footer className="flex flex-col items-center justify-center gap-xs p-xl border-t-[1px] border-outline-variant">
		<div>
			<Logo />
			<span>© {new Date().getFullYear()} Aakaar</span>
		</div>
		<span>
			Brought to you by{" "}
			<a href="http://navnote.com" target="_blank" rel="noopener noreferrer">
				Navjot Ahuja
			</a>
		</span>
	</footer>
);
