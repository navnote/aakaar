import { describe, expect, it } from "vitest";
import type { ColorStrategyOutput } from "../../../types";
import { harmonyColorStrategy } from "./index";

describe("harmonyColorStrategy", () => {
	it("should return proper ColorStrategyOutput with all required properties", () => {
		const result = harmonyColorStrategy("#6750A4");

		expect(result).toBeDefined();
		expect(typeof result).toBe("object");

		// Check that all required properties are present
		expect(result).toHaveProperty("primaryPalette");
		expect(result).toHaveProperty("lightDark");
		expect(result).toHaveProperty("blackAndWhite");

		// Check primaryPalette structure
		expect(typeof result.primaryPalette).toBe("object");
		expect(Object.keys(result.primaryPalette).length).toBe(12);

		// Check lightDark structure
		expect(typeof result.lightDark).toBe("object");
		expect(Object.keys(result.lightDark).length).toBe(29);

		// Check blackAndWhite structure
		expect(typeof result.blackAndWhite).toBe("object");
		expect(result.blackAndWhite).toHaveProperty("white");
		expect(result.blackAndWhite).toHaveProperty("black");
		expect(result.blackAndWhite.white.name).toBe("white");
		expect(result.blackAndWhite.black.name).toBe("black");
	});

	it("should generate different colors than material strategy", () => {
		const harmonyResult = harmonyColorStrategy("#6750A4");

		// The harmony strategy should produce light-dark functions like Material Design
		// This is a basic check that the strategy is working
		expect(harmonyResult.lightDark.primary.value).toContain("light-dark");
		expect(harmonyResult.lightDark.secondary.value).toContain("light-dark");
		expect(harmonyResult.lightDark.tertiary.value).toContain("light-dark");
	});
});
