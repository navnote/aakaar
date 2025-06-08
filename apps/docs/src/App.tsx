import { Route, Routes } from "react-router";
import { BaseLayout } from "./core/layout/base";
import Accordion from "./routes/docs/components/accordion";
import Avatar from "./routes/docs/components/avatar";
import Breadcrumb from "./routes/docs/components/breadcrumb";
import Button from "./routes/docs/components/button";
import Card from "./routes/docs/components/card";
import Checkbox from "./routes/docs/components/checkbox";
import Dialog from "./routes/docs/components/dialog";
import Input from "./routes/docs/components/input";
import Label from "./routes/docs/components/label";
import Popover from "./routes/docs/components/popover";
import Radio from "./routes/docs/components/radio";
import Select from "./routes/docs/components/select";
import Switch from "./routes/docs/components/switch";
import Tabs from "./routes/docs/components/tabs";
import Installation from "./routes/docs/installation";
import Introduction from "./routes/docs/introduction";
import Home from "./routes/home";
import Textarea from "./routes/docs/components/textarea";

function App() {
	return (
		<Routes>
			<Route path="/" element={<BaseLayout />}>
				<Route index element={<Home />} />
				<Route path="docs">
					<Route path="introduction" element={<Introduction />} />
					<Route path="installation" element={<Installation />} />

					<Route path="components">
						<Route path="accordion" element={<Accordion />} />
						<Route path="avatar" element={<Avatar />} />
						<Route path="breadcrumb" element={<Breadcrumb />} />
						<Route path="button" element={<Button />} />
						<Route path="card" element={<Card />} />
						<Route path="checkbox" element={<Checkbox />} />
						<Route path="dialog" element={<Dialog />} />
						<Route path="input" element={<Input />} />
						<Route path="label" element={<Label />} />
						<Route path="popover" element={<Popover />} />
						<Route path="radio" element={<Radio />} />
						<Route path="select" element={<Select />} />
						<Route path="switch" element={<Switch />} />
						<Route path="tabs" element={<Tabs />} />
						<Route path="textarea" element={<Textarea />} />
					</Route>
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
