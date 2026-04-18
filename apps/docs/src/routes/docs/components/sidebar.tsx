import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from "@aakaar/react";
import {
	IconDashboard,
	IconHome,
	IconSettings,
	IconUser,
} from "@tabler/icons-react";
import SidebarRegistry from "../../../../public/registry/sidebar.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Sidebar</h1>
			<p>
				A composable, themeable sidebar component that supports collapsible
				states, mobile responsiveness, and keyboard shortcuts.
			</p>

			<h2>Demo</h2>
			<Demo
				code={`<SidebarProvider>
  <div className="flex h-[25rem] w-full overflow-hidden rounded-default border border-outline-variant">
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <IconHome />
              <span>Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive>
                  <IconDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <IconUser />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <IconSettings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <IconUser />
              <span>Username</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    <SidebarInset className="p-md">
      <div className="flex items-center gap-md">
        <SidebarTrigger />
        <h3 className="text-lg font-semibold">Main Content</h3>
      </div>
      <p className="mt-md text-on-surface-variant">
        This is the main content area. The sidebar can be toggled using the
        trigger button or the Cmd/Ctrl+B keyboard shortcut.
      </p>
    </SidebarInset>
  </div>
</SidebarProvider>`}
			>
				<SidebarProvider>
					<div className="flex h-[25rem] w-full overflow-hidden rounded-default border border-outline-variant">
						<Sidebar collapsible="icon">
							<SidebarHeader>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<IconHome />
											<span>Home</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarHeader>
							<SidebarContent>
								<SidebarGroup>
									<SidebarGroupLabel>Application</SidebarGroupLabel>
									<SidebarGroupContent>
										<SidebarMenu>
											<SidebarMenuItem>
												<SidebarMenuButton isActive>
													<IconDashboard />
													<span>Dashboard</span>
												</SidebarMenuButton>
											</SidebarMenuItem>
											<SidebarMenuItem>
												<SidebarMenuButton>
													<IconUser />
													<span>Profile</span>
												</SidebarMenuButton>
											</SidebarMenuItem>
											<SidebarMenuItem>
												<SidebarMenuButton>
													<IconSettings />
													<span>Settings</span>
												</SidebarMenuButton>
											</SidebarMenuItem>
										</SidebarMenu>
									</SidebarGroupContent>
								</SidebarGroup>
							</SidebarContent>
							<SidebarFooter>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton>
											<IconUser />
											<span>Username</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarFooter>
						</Sidebar>
						<SidebarInset className="p-md">
							<div className="flex items-center gap-md">
								<SidebarTrigger />
								<h3 className="text-lg font-semibold">Main Content</h3>
							</div>
							<p className="mt-md text-on-surface-variant">
								This is the main content area. The sidebar can be toggled using
								the trigger button or the Cmd/Ctrl+B keyboard shortcut.
							</p>
						</SidebarInset>
					</div>
				</SidebarProvider>
			</Demo>

			<h2>Features</h2>
			<ul>
				<li>Collapsible sidebar with icon-only mode</li>
				<li>Mobile-responsive with dialog overlay</li>
				<li>Keyboard shortcut support (Cmd/Ctrl+B)</li>
				<li>Multiple variants: sidebar, floating, inset</li>
				<li>Tooltip support when collapsed</li>
				<li>Compositional architecture with Header, Content, Footer</li>
			</ul>

			<h2>Composition</h2>
			<pre>
				{`SidebarProvider
├── Sidebar
│   ├── SidebarHeader
│   ├── SidebarContent
│   │   ├── SidebarGroup
│   │   │   ├── SidebarGroupLabel
│   │   │   ├── SidebarGroupAction
│   │   │   ├── SidebarGroupContent
│   │   │   └── SidebarMenu
│   │   │       ├── SidebarMenuItem
│   │   │       │   ├── SidebarMenuButton
│   │   │       │   ├── SidebarMenuAction
│   │   │       │   └── SidebarMenuBadge
│   │   │       └── SidebarMenuItem
│   │   │           ├── SidebarMenuButton
│   │   │           └── SidebarMenuSub
│   │   │               ├── SidebarMenuSubItem
│   │   │               └── SidebarMenuSubItem
│   │   └── SidebarGroup
│   ├── SidebarFooter
│   └── SidebarRail
├── SidebarInset
└── SidebarTrigger`}
			</pre>

			<Installation registry={SidebarRegistry} componentName="sidebar" />
		</article>
	);
};
