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
it('Span tag should be in the document', () => {
  render(<Page params={{ slug: 'Test1' }} />)
  expect(screen.getByText('ThisIsTestSpan')).toBeInTheDocument()
})
it('Strong tag should be in the document', () => {
  render(<Page params={{ slug: 'Test2' }} />)
  expect(screen.getByText('BayGioLa2:22 AM')).toBeInTheDocument()
})
it('paragraph tag should be in the document', () => {
  render(<Page params={{ slug: 'Test3' }} />)
  expect(screen.getByText('demoTestSamGroup')).toBeInTheDocument()
})