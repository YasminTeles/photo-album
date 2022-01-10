import { render, screen } from "@testing-library/react"

import App from "./App"

test("renders 'My photo album' title", () => {
  render(<App />)
  const linkElement = screen.getByText(/My photo album/i)
  expect(linkElement).toBeInTheDocument()
})
