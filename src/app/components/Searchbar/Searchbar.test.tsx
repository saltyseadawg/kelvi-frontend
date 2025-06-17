import { expect, test, vi} from 'vitest'
import { render, screen } from '@testing-library/react'
import Searchbar from './Searchbar'
import { submitSearch } from '@/app/actions/actions'



vi.mock('@/app/actions/actions')
 
test('Search bar should appear', () => {
    render(<Searchbar />)
    expect(screen.getByPlaceholderText("Search for a word")).toBeDefined();
})

test('Pressing submit with user input should pass string to back end', () => {
    const handleSearch = vi.fn();
    handleSearch.mockClear()

})

// describe("sampleAction", () => {
//   test("Normal: Returns the correct value", async () => {
//     const result = await sampleAction(true);
//     expect(result).toEqual({ sampleAction: "sampleAction" });
//   });

//   test("Error: Redirects to the error page", async () => {
//     vi.mock("next/navigation", () => {
//       return {
//         redirect: (path: string) => {
//           return path;
//         },
//       };
//     });
//     const result = await sampleAction(false);
//     expect(result).toBe("/error");
//   });
// });