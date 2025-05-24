import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'
 
test('Navbar should be closed by default', () => {
  render(<Navbar />)
  expect(screen.getByTestId("btn-close-nav").getAttribute('aria-hidden')).toBe('true');
  // expect(close_btn).not.isVisible()
})