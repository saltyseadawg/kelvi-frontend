import { expect, test, describe, it, vi} from 'vitest'
import {  } from "vitest";
import { render, screen } from '@testing-library/react'
import Searchbar from './Searchbar'
 
test('Search bar should appear', () => {
    render(<Searchbar />)
    expect(screen.getByPlaceholderText("Search for a word")).toBeDefined();
})