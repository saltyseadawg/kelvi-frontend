import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from "@testing-library/user-event"
import Searchbar from './Searchbar'

const pushMock = vi.fn()

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
  usePathname: () => "/",
}))

describe("Searchbar", () => {
    test("Normal: Push user input onto URL", async () => {
        render(<Searchbar/>)
        expect(screen.getByPlaceholderText("Search a Tamil word")).toBeDefined();
        await userEvent.type(screen.getByLabelText("Searchbar"), "word");
        await userEvent.click(screen.getByRole("button", { name: "Search" }));
        expect(pushMock).toHaveBeenCalledTimes(1)
        expect(pushMock).toHaveBeenCalledWith("/?query=word")
    });
});
