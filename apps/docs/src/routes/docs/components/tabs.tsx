import { Phone, Tabs, TabsContent, TabsList, TabsTrigger } from "@aakaar/react";
import { IconKey, IconUser } from "@tabler/icons-react";
import TabsRegistry from "../../../../public/registry/tabs.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

const tabsMobileDemo = (
	<Tabs defaultValue="account" className="w-[400px]">
		<TabsContent value="account">
			<div className="flex flex-col gap-xs items-center h-full">
				<IconUser className="size-[200px] stroke-on-primary" />
			</div>
		</TabsContent>
		<TabsContent value="password">
			<div className="flex flex-col gap-xs items-center h-full">
				<IconKey className="size-[200px] stroke-on-primary" />
			</div>
		</TabsContent>
		<TabsList className="grid w-full grid-cols-2">
			<TabsTrigger value="account">
				<div className="flex flex-col gap-xs items-center">
					<IconUser size={20} />
					<span>Account</span>
				</div>
			</TabsTrigger>
			<TabsTrigger value="password">
				<div className="flex flex-col gap-xs items-center">
					<IconKey size={20} />
					<span>Password</span>
				</div>
			</TabsTrigger>
		</TabsList>
	</Tabs>
);

export default () => {
	return (
		<article>
			<h1>Tabs</h1>
			<p>
				The tabs component is a set of tabbed navigation items that allow users
				to switch between different sections of content.
			</p>
			<h2>Demo with mobile wrapper</h2>
			<Demo
				code={`
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsContent value="account">
        <div className="flex flex-col gap-xs items-center h-full">
          <IconUser className="size-[200px] stroke-on-primary" />
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="flex flex-col gap-xs items-center h-full">
          <IconKey className="size-[200px] stroke-on-primary" />
        </div>
      </TabsContent>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">
          <div className="flex flex-col gap-xs items-center">
            <IconUser size={20} />
            <span>Account</span>
          </div>
        </TabsTrigger>
        <TabsTrigger value="password">
          <div className="flex flex-col gap-xs items-center">
            <IconKey size={20} />
            <span>Password</span>
          </div>
        </TabsTrigger>
      </TabsList>
    </Tabs>`}
			>
				<Phone
					style={{
						transform: "scale(0.8)",
						maxWidth: "90vw",
					}}
					component={
						<div className="h-full flex flex-col justify-end bg-outline-variant">
							{tabsMobileDemo}{" "}
						</div>
					}
				/>
			</Demo>
			<h2>Default demo</h2>
			<Demo
				code={`
       <Tabs defaultValue="account" className="w-1/2">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger variant={'secondary'} value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant={'secondary'} value="password">
              Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">Account</TabsContent>
          <TabsContent value="password">Password</TabsContent>
        </Tabs>
      `}
			>
				<Tabs defaultValue="account" className="w-1/2">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger variant={"secondary"} value="account">
							Account
						</TabsTrigger>
						<TabsTrigger variant={"secondary"} value="password">
							Password
						</TabsTrigger>
					</TabsList>
					<TabsContent value="account">Account</TabsContent>
					<TabsContent value="password">Password</TabsContent>
				</Tabs>
			</Demo>
			<Installation registry={TabsRegistry} componentName="tabs" />
		</article>
	);
};
