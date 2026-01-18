import {
	IconAlertTriangle,
	IconCircleCheck,
	IconCircleX,
	IconInfoCircle,
	IconLoader2,
} from "@tabler/icons-react";
import type * as React from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			className="toaster group"
			icons={{
				success: <IconCircleCheck className="size-md" />,
				info: <IconInfoCircle className="size-md" />,
				warning: <IconAlertTriangle className="size-md" />,
				error: <IconCircleX className="size-md" />,
				loading: <IconLoader2 className="size-md animate-spin" />,
			}}
			style={
				{
					"--normal-bg": "hsl(var(--color-surface))",
					"--normal-text": "hsl(var(--color-on-surface))",
					"--normal-border": "hsl(var(--color-outline-variant))",
					"--success-bg": "hsl(var(--color-primary-container))",
					"--success-text": "hsl(var(--color-on-primary-container))",
					"--success-border": "hsl(var(--color-primary))",
					"--info-bg": "hsl(var(--color-secondary-container))",
					"--info-text": "hsl(var(--color-on-secondary-container))",
					"--info-border": "hsl(var(--color-secondary))",
					"--warning-bg": "hsl(var(--color-tertiary-container))",
					"--warning-text": "hsl(var(--color-on-tertiary-container))",
					"--warning-border": "hsl(var(--color-tertiary))",
					"--error-bg": "hsl(var(--color-error-container))",
					"--error-text": "hsl(var(--color-on-error-container))",
					"--error-border": "hsl(var(--color-error))",
					"--border-radius": "var(--radius-default)",
				} as React.CSSProperties
			}
			{...props}
		/>
	);
};

export { Toaster };
