/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { render, screen } from '@testing-library/react'
import Page from './Page'

describe('Page component', () => {
  it('renders heading', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { name: /app router/i })
    expect(heading).toBeInTheDocument()
  })
})
it('NamPhuong should be in the document', () => {
  render(<Page params={{ slug: 'Test' }} />)
  expect(screen.getByText('NamPhuong')).toBeInTheDocument()
})
it('NamPhuong should be in the document', () => {
  render(<Page params={{ slug: 'Test1' }} />)
  expect(screen.getByText('DoDat2')).toBeInTheDocument()
})
it('NamPhuong should be in the document', () => {
  render(<Page params={{ slug: 'Test1' }} />)
  expect(screen.getByText('NamPhuongDemo')).toBeInTheDocument()
})
