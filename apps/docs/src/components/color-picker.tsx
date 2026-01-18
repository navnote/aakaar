import { Popover, PopoverContent, PopoverTrigger } from "@aakaar/react";
import { IconColorPicker } from "@tabler/icons-react";
import { HexColorPicker } from "react-colorful";
import { useAppContext } from "../core/app/context";

export const ColorPicker = ({ inline }: { inline?: boolean }) => {
	const { primary, setPrimary } = useAppContext();

	if (inline) {
		return (
			<div className="flex flex-col items-center gap-xs">
				<HexColorPicker
					color={primary}
					onChange={(color) => setPrimary(color)}
				/>
			</div>
		);
	}

	return (
		<Popover>
			<PopoverTrigger className="rounded-default bg-primary text-on-primary hover:opacity-70 active:opacity-100 transition-opacity duration-200 ease-in-out inline-flex items-center justify-center size-sm relative">
				<IconColorPicker size={20} style={{ fill: primary, stroke: primary }} />
			</PopoverTrigger>
			<PopoverContent>
				<HexColorPicker
					color={primary}
					onChange={(color) => setPrimary(color)}
				/>
			</PopoverContent>
		</Popover>
	);
};
