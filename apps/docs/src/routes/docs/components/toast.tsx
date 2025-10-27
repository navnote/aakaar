import {
	Toast as AakaarToast,
	Button,
	ToastClose,
	ToastDescription,
	ToastPortal,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from "@aakaar/react";
import { Toast } from "@base-ui-components/react";
import * as React from "react";
import ToastRegistry from "../../../../public/registry/toast.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

function ToastButton() {
	const toastManager = Toast.useToastManager();
	const [count, setCount] = React.useState(0);

	function createToast() {
		setCount((prev) => prev + 1);
		toastManager.add({
			title: `Toast ${count + 1} created`,
			description: "This is a toast notification.",
		});
	}

	return (
		<Button type="button" onClick={createToast}>
			Create toast
		</Button>
	);
}

function ToastList() {
	const { toasts } = Toast.useToastManager();
	return (
		<>
			{toasts.map((toast) => (
				<AakaarToast key={toast.id} toast={toast}>
					<ToastTitle />
					<ToastDescription />
					<ToastClose aria-label="Close">×</ToastClose>
				</AakaarToast>
			))}
		</>
	);
}

export default () => {
	return (
		<article>
			<h1>Toast</h1>
			<p>A succinct message that is displayed temporarily.</p>
			<h2>Demo</h2>
			<ToastProvider>
				<Demo
					code={`
import { Toast } from "@base-ui-components/react";
import { Toast as AakaarToast, ToastClose, ToastDescription, ToastTitle } from "@aakaar/react";

function ToastButton() {
  const toastManager = Toast.useToastManager();
  const [count, setCount] = React.useState(0);

  function createToast() {
    setCount((prev) => prev + 1);
    toastManager.add({
      title: \`Toast \${count + 1} created\`,
      description: "This is a toast notification.",
    });
  }

  return (
    <Button type="button" onClick={createToast}>
      Create toast
    </Button>
  );
}

function ToastList() {
  const { toasts } = Toast.useToastManager();
  return (
    <>
      {toasts.map((toast) => (
        <AakaarToast key={toast.id} toast={toast}>
          <ToastTitle />
          <ToastDescription />
          <ToastClose aria-label="Close">×</ToastClose>
        </AakaarToast>
      ))}
    </>
  );
}
      `}
				>
					<ToastButton />
				</Demo>
				<ToastPortal>
					<ToastViewport>
						<ToastList />
					</ToastViewport>
				</ToastPortal>
			</ToastProvider>
			<Installation registry={ToastRegistry} componentName="toast" />
		</article>
	);
};
