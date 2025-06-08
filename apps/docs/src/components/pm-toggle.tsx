import type { PackageManager } from "@aakaar/global";
import { Button } from "@aakaar/react";
import {
	IconBlob,
	IconBrandNpm,
	IconBrandPnpm,
	IconBrandYarn,
} from "@tabler/icons-react";
import type { ReactNode } from "react";
import { useAppContext } from "../core/app";

const IconMapping: Record<PackageManager, ReactNode> = {
	pnpm: <IconBrandPnpm size={20} />,
	yarn: <IconBrandYarn size={20} />,
	npm: <IconBrandNpm size={20} />,
	bun: <IconBlob size={20} />,
	deno: <IconBlob size={20} />,
};

export const PmToggle = () => {
	const { packageManager, setPackageManager } = useAppContext();
	const pmIcon = IconMapping[packageManager as PackageManager];
	const allPackageManagers = Object.keys(IconMapping) as PackageManager[];
	const handleToggle = () => {
		const nextPm =
			allPackageManagers[
				(allPackageManagers.indexOf(packageManager) + 1) %
					allPackageManagers.length
			];
		setPackageManager(nextPm);
	};
	return (
		<Button size={"icon"} onClick={() => handleToggle()}>
			{pmIcon}
		</Button>
	);
};
