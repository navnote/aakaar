import { Badge, Button, GridPattern, cn } from "@aakaar/react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { Logo } from "src/components/logo";
import { Widgets } from "src/components/widgets";

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function Home() {
	return (
		<div className="bg-background text-on-surface-variant overflow-x-hidden overflow-y-hidden">
			<div
				className={cn(
					"fixed inset-0 -z-10",
					"bg-[radial-gradient(ellipse_at_top,_var(--color-primary-container)_0%,_transparent_50%)]",
					"opacity-60",
				)}
			/>
			<div
				className={cn(
					"fixed inset-0 -z-10",
					"bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-tertiary-container)_0%,_transparent_50%)]",
					"opacity-40",
				)}
			/>
			<div
				className={cn(
					"fixed inset-0 -z-10",
					"bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-secondary-container)_0%,_transparent_50%)]",
					"opacity-30",
				)}
			/>

			<div className="w-full min-h-[90vh]">
				<div className="mx-auto px-sm md:px-md">
					<div className="relative flex min-h-[90vh] w-full flex-col items-center justify-center pt-xl overflow-hidden">
						<motion.div
							variants={staggerContainer}
							initial="initial"
							animate="animate"
							className=" flex flex-col items-center gap-lg text-center max-w-4xl"
						>
							<motion.div variants={fadeInUp}>
								<Logo size="lg" className="drop-shadow-lg" />
							</motion.div>

							<motion.div variants={fadeInUp} className="space-y-sm">
								<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
									<span className="bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradient_4s_ease-in-out_infinite]">
										Build the form of
									</span>
									<br />
									<span className="text-on-background">your design system</span>
								</h1>
							</motion.div>

							<motion.div variants={fadeInUp}>
								<p className="text-lg md:text-xl text-on-surface-variant max-w-2xl">
									A modern, customizable UI component library built with React,
									TypeScript, and Tailwind CSS. Heavily customizable using
									tokens.
								</p>
							</motion.div>

							<motion.div
								variants={fadeInUp}
								className="flex flex-wrap items-center justify-center gap-sm"
							>
								{[
									"TypeScript",
									"Tailwind CSS",
									"Material Design 3",
									"Accessible",
								].map((feature) => (
									<Badge variant="secondary" key={feature}>
										{feature}
									</Badge>
								))}
							</motion.div>

							<motion.div
								variants={fadeInUp}
								className="flex flex-col sm:flex-row items-center gap-md mt-md"
							>
								<Button
									size="lg"
									asChild
									className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
								>
									<Link to="/docs/introduction">
										<span className="relative">Get Started</span>
										<div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-tertiary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									</Link>
								</Button>
								<Button size="lg" variant="outline" asChild>
									<Link to="/docs/components/accordion">
										Explore Components
									</Link>
								</Button>
							</motion.div>

							<motion.div
								variants={fadeInUp}
								className="flex items-center gap-xl md:gap-2xl mt-lg pt-lg border-t border-outline-variant/30"
							>
								{[
									{ value: "27", label: "Components" },
									{ value: "100%", label: "TypeScript" },
									{ value: "v0.0", label: "Version" },
								].map((stat) => (
									<div key={stat.label} className="text-center">
										<div className="text-2xl md:text-3xl font-semibold text-primary">
											{stat.value}
										</div>
										<div className="text-sm text-on-surface-variant">
											{stat.label}
										</div>
									</div>
								))}
							</motion.div>
						</motion.div>

						<GridPattern
							squares={[
								[4, 4],
								[5, 1],
								[8, 2],
								[5, 3],
								[5, 5],
								[10, 10],
								[20, 21],
								[15, 11],
								[10, 15],
								[15, 10],
								[10, 17],
								[15, 25],
							]}
							className={cn(
								"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
								"inset-x-0 inset-y-[-30%] h-[100%] skew-y-12 opacity-[0.3]",
							)}
						/>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="py-2xl"
					>
						<Widgets />
					</motion.div>
				</div>
			</div>
		</div>
	);
}
