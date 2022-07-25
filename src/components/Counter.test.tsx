import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "solid-testing-library";
import { describe, expect, it } from "vitest";
import Counter  from "./Counter";

describe("<Counter />", () => {
	it("should render", () => {
		expect(Counter).toBeTruthy();

		const { unmount, container } = render(() => <Counter />);
		expect(container).toMatchSnapshot();

		unmount();
	});

	it("should increments value", async () => {
		expect(Counter).toBeTruthy();

		const { unmount } = render(() => <Counter />);
		const button = screen.queryByRole("button") as HTMLButtonElement;

		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(/Clicks: 0/);

		fireEvent.click(button);
		expect(button).toHaveTextContent(/Clicks: 1/);

		await userEvent.click(button);
		expect(button).toHaveTextContent(/Clicks: 2/);

		unmount();
	});
});
