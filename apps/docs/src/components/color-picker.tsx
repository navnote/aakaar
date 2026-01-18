import { Button, Popover, PopoverContent, PopoverTrigger } from "@aakaar/react";
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
			<PopoverTrigger asChild>
				<Button size="icon">
					<IconColorPicker
						size={20}
						style={{ fill: primary, stroke: primary }}
					/>
				</Button>
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
