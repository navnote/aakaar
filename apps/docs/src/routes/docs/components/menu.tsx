import {
	Button,
	Menu,
	MenuCheckboxItem,
	MenuContent,
	MenuItem,
	MenuLabel,
	MenuRadioGroup,
	MenuRadioItem,
	MenuSeparator,
	MenuShortcut,
	MenuTrigger,
} from "@aakaar/react";
import MenuRegistry from "../../../../public/registry/menu.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Menu</h1>
			<p>
				Displays a menu to the user — such as a set of actions or functions —
				triggered by a button.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
<Menu>
  <MenuTrigger>
    <Button variant="outline">Open menu</Button>
  </MenuTrigger>
  <MenuContent>
    <MenuItem onSelect={(e) => e.preventDefault()}>
      <span>Profile</span>
      <MenuShortcut>⇧⌘P</MenuShortcut>
    </MenuItem>
    <MenuItem onSelect={(e) => e.preventDefault()}>
      <span>Settings</span>
      <MenuShortcut>⌘,</MenuShortcut>
    </MenuItem>
    <MenuSeparator />
    <MenuCheckboxItem checked onSelect={(e) => e.preventDefault()}>
      <span>Show status bar</span>
    </MenuCheckboxItem>
    <MenuCheckboxItem onSelect={(e) => e.preventDefault()}>
      <span>Show activity bar</span>
    </MenuCheckboxItem>
  </MenuContent>
</Menu>
        `}
			>
				<Menu>
					<MenuTrigger>
						<Button variant="outline">Open menu</Button>
					</MenuTrigger>
					<MenuContent>
						<MenuItem onSelect={(e) => e.preventDefault()}>
							<span>Profile</span>
							<MenuShortcut>⇧⌘P</MenuShortcut>
						</MenuItem>
						<MenuItem onSelect={(e) => e.preventDefault()}>
							<span>Settings</span>
							<MenuShortcut>⌘,</MenuShortcut>
						</MenuItem>
						<MenuSeparator />
						<MenuCheckboxItem checked onSelect={(e) => e.preventDefault()}>
							<span>Show status bar</span>
						</MenuCheckboxItem>
						<MenuCheckboxItem onSelect={(e) => e.preventDefault()}>
							<span>Show activity bar</span>
						</MenuCheckboxItem>
					</MenuContent>
				</Menu>
			</Demo>
			<Installation registry={MenuRegistry} componentName="menu" />
		</article>
	);
};
