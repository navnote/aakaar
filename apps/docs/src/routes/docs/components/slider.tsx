import {
	Label,
	Slider,
	SliderControl,
	SliderRange,
	SliderThumb,
	SliderTrack,
} from "@aakaar/react";
import SliderRegistry from "../../../../public/registry/slider.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Slider</h1>
			<p>An input where the user selects a value from within a given range.</p>
			<h2>Demo</h2>
			<Demo
				code={`
<div className="space-y-md">
  <div className="space-y-sm">
    <Label htmlFor="slider">Volume</Label>
    <Slider defaultValue={[50]} max={100} step={1}>
      <SliderControl>
        <SliderTrack>
          <SliderRange />
          <SliderThumb />
        </SliderTrack>
      </SliderControl>
    </Slider>
  </div>
</div>
        `}
			>
				<div className="space-y-md">
					<div className="space-y-sm">
						<Label htmlFor="slider">Volume</Label>
						<Slider defaultValue={[50]} max={100} step={1}>
							<SliderControl>
								<SliderTrack>
									<SliderRange />
									<SliderThumb />
								</SliderTrack>
							</SliderControl>
						</Slider>
					</div>
				</div>
			</Demo>
			<Installation registry={SliderRegistry} componentName="slider" />
		</article>
	);
};
