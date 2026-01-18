import { Route, Routes } from "react-router";
import { BaseLayout } from "./core/layout/base";
import Accordion from "./routes/docs/components/accordion";
import Alert from "./routes/docs/components/alert";
import AlertDialog from "./routes/docs/components/alert-dialog";
import AspectRatio from "./routes/docs/components/aspect-ratio";
import Avatar from "./routes/docs/components/avatar";
import Badge from "./routes/docs/components/badge";
import Breadcrumb from "./routes/docs/components/breadcrumb";
import Button from "./routes/docs/components/button";
import ButtonGroup from "./routes/docs/components/button-group";
import Calendar from "./routes/docs/components/calendar";
import Card from "./routes/docs/components/card";
import Checkbox from "./routes/docs/components/checkbox";
import Dialog from "./routes/docs/components/dialog";
import Input from "./routes/docs/components/input";
import Label from "./routes/docs/components/label";
import Menu from "./routes/docs/components/menu";
import Popover from "./routes/docs/components/popover";
import Progress from "./routes/docs/components/progress";
import Radio from "./routes/docs/components/radio";
import Select from "./routes/docs/components/select";
import Slider from "./routes/docs/components/slider";
import Sonner from "./routes/docs/components/sonner";
import Switch from "./routes/docs/components/switch";
import Tabs from "./routes/docs/components/tabs";
import Textarea from "./routes/docs/components/textarea";
import Tooltip from "./routes/docs/components/tooltip";
import Installation from "./routes/docs/installation";
import Introduction from "./routes/docs/introduction";
import Home from "./routes/home";

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
						<Route path="alert" element={<Alert />} />
						<Route path="alert-dialog" element={<AlertDialog />} />
						<Route path="aspect-ratio" element={<AspectRatio />} />
						<Route path="avatar" element={<Avatar />} />
						<Route path="badge" element={<Badge />} />
						<Route path="breadcrumb" element={<Breadcrumb />} />
						<Route path="button" element={<Button />} />
						<Route path="button-group" element={<ButtonGroup />} />
						<Route path="calendar" element={<Calendar />} />
						<Route path="card" element={<Card />} />
						<Route path="checkbox" element={<Checkbox />} />
						<Route path="dialog" element={<Dialog />} />
						<Route path="input" element={<Input />} />
						<Route path="label" element={<Label />} />
						<Route path="menu" element={<Menu />} />
						<Route path="popover" element={<Popover />} />
						<Route path="progress" element={<Progress />} />
						<Route path="radio" element={<Radio />} />
						<Route path="select" element={<Select />} />
						<Route path="slider" element={<Slider />} />
						<Route path="sonner" element={<Sonner />} />
						<Route path="switch" element={<Switch />} />
						<Route path="tabs" element={<Tabs />} />
						<Route path="textarea" element={<Textarea />} />
						<Route path="tooltip" element={<Tooltip />} />
					</Route>
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
