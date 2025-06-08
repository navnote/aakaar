import { VariableCase } from "../types";

const words = (text: string) =>
	text.match(/[A-Z]?[a-z]+|[0-9]+|[^a-zA-Z0-9\s-]/g) || [];

export const transformCase = (text: string, target: VariableCase) => {
	switch (target) {
		case VariableCase.CAMEL:
			return words(text).reduce((result, word, index) => {
				const lower = word.toLowerCase();
				return (
					result +
					(index === 0 ? lower : lower[0].toUpperCase() + lower.slice(1))
				);
			}, "");
		case VariableCase.KEBAB:
			return words(text).reduce((result, word, index) => {
				return (
					result + (index === 0 ? word.toLowerCase() : `-${word.toLowerCase()}`)
				);
			}, "");
		case VariableCase.SNAKE:
			return words(text).reduce((result, word, index) => {
				return (
					result + (index === 0 ? word.toLowerCase() : `_${word.toLowerCase()}`)
				);
			}, "");
		default:
			return text;
	}
};
