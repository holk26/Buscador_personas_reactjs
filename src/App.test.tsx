import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders greeting message', () => {
    render(<App />)
    const greetingElement = screen.getByText(/Hola/i)
    expect(greetingElement).toBeInTheDocument()
  })

  it('renders button', () => {
    render(<App />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
})
