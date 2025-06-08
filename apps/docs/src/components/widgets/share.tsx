import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@aakaar/react";
import { useState } from "react";

const RightsSelect = ({ value }: { value: string }) => {
	const [selectValue, setSelectValue] = useState(value);
	return (
		<Select value={selectValue} onValueChange={setSelectValue}>
			<SelectTrigger className="w-[100px]">
				<SelectValue placeholder="Edit" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="edit">Edit</SelectItem>
				<SelectItem value="view">View</SelectItem>
			</SelectContent>
		</Select>
	);
};

export const Share = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Share the document</CardTitle>
				<CardDescription>
					Share the document with your friends and colleagues.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-md">
				<div className="flex justify-between">
					<div className="flex gap-md">
						<Avatar>
							<AvatarImage src="https://github.com/navnote.png" />
							<AvatarFallback>NN</AvatarFallback>
						</Avatar>
						<span>Navjot Ahuja</span>
					</div>
					<RightsSelect value="edit" />
				</div>
				<div className="flex justify-between">
					<div className="flex gap-md">
						<Avatar>
							<AvatarImage />
							<AvatarFallback>PE</AvatarFallback>
						</Avatar>
						<span>Peace</span>
					</div>
					<RightsSelect value="view" />
				</div>
			</CardContent>
		</Card>
	);
};
