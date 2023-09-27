import { render, screen } from "@testing-library/react"
import {userEvent } from "@testing-library/user-event"
import App from "../../App"
describe("App", () => {
test("first test", () => {
render(<App />)
const linkElement = screen.getByText(/27/i)
expect(linkElement).toBeInTheDocument()
})
})
describe("App", () => {
  test("button is clicked using userEvent", async () => {
    const user = userEvent.setup()
    render(<App />)
    const buttonElement = screen.getByRole("button")
    await user.click(buttonElement);
    const linkElement = screen.getByText(/adres /i)
expect(linkElement).toBeInTheDocument()
})
})