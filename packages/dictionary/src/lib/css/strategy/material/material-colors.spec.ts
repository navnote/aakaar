import { describe, expect, it } from "vitest";
import type { AakaarColorScheme } from "../../../types";
import {
	lightDarkTokens,
	primaryPaletteTokens,
	theme,
} from "./material-colors";

describe("colors", () => {
	describe("lightDarkTokens", () => {
		it("should return proper AakaarColorScheme object with all required attributes", () => {
			const generatedTheme = theme("#6750A4");
			const result = lightDarkTokens(generatedTheme);

			expect(result).toBeDefined();
			expect(typeof result).toBe("object");
			expect(Array.isArray(result)).toBe(false);

			// Check that all required AakaarColorScheme properties are present
			const requiredProperties = [
				"primary",
				"onPrimary",
				"primaryContainer",
				"onPrimaryContainer",
				"secondary",
				"onSecondary",
				"secondaryContainer",
				"onSecondaryContainer",
				"tertiary",
				"onTertiary",
				"tertiaryContainer",
				"onTertiaryContainer",
				"error",
				"onError",
				"errorContainer",
				"onErrorContainer",
				"background",
				"onBackground",
				"surface",
				"onSurface",
				"surfaceVariant",
				"onSurfaceVariant",
				"outline",
				"outlineVariant",
				"shadow",
				"scrim",
				"inverseSurface",
				"inverseOnSurface",
				"inversePrimary",
			] as const;

			expect(Object.keys(result).length).toBe(requiredProperties.length);

			for (const property of requiredProperties) {
				expect(result).toHaveProperty(property);
				const token = result[property];
				expect(token).toHaveProperty("name");
				expect(token).toHaveProperty("value");
				expect(typeof token.name).toBe("string");
				expect(typeof token.value).toBe("string");
				expect(token.name).toBe(`color-${property}`);
			}
		});
	});

	describe("primaryPaletteTokens", () => {
		it("should return all primary palette tokens with correct structure", () => {
			const generatedTheme = theme("#6750A4");
			const result = primaryPaletteTokens(generatedTheme);

			expect(result).toBeDefined();
			expect(typeof result).toBe("object");
			expect(Array.isArray(result)).toBe(false);

			// Check that all 12 primary tones are present
			const expectedTones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100];
			expect(Object.keys(result).length).toBe(expectedTones.length);

			for (const tone of expectedTones) {
				const propertyName = `primary${tone}`;
				expect(result).toHaveProperty(propertyName);

				const token = result[propertyName as keyof typeof result];
				expect(token).toHaveProperty("name");
				expect(token).toHaveProperty("value");
				expect(typeof token.name).toBe("string");
				expect(typeof token.value).toBe("string");
				expect(token.name).toBe(`color-primary${tone}`);
				expect(token.value).toMatch(/^oklch\([^)]+\)$/);
			}
		});
	});
});
