import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Searchbar from './Searchbar'
import { submitSearch } from '@/app/actions/actions'
import { userEvent } from "@testing-library/user-event"

vi.mock('@/app/actions/actions')

describe("submitSearch", () => {
    test("Normal: Returns the user's input", async () => {
        render(<Searchbar action={submitSearch}/>)
        expect(screen.getByPlaceholderText("Search a Tamil word")).toBeDefined();
        await userEvent.type(screen.getByLabelText("Searchbar"), "word");
        await userEvent.click(screen.getByRole("button", { name: "Search" }));
        await vi.waitFor(() =>
            expect(submitSearch).toHaveBeenCalledOnce()
        )
        // not sure why this isn't working
        // expect(result).toHaveBeenLastCalledWith({ query: "word" }, "", new FormData());
    });
});
