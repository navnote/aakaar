import { Button, Popover, PopoverContent, PopoverTrigger } from "@aakaar/react";
import { IconColorPicker } from "@tabler/icons-react";
import { HexColorPicker } from "react-colorful";
import { useAppContext } from "../core/app/context";

export const ColorPicker = () => {
	const { primary, setPrimary } = useAppContext();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button size="icon" className="relative" variant="primary">
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
