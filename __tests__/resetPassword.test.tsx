import './matchMedia.mock';
import { render, screen } from '@testing-library/react'
import ResetPasswordPage from '@/pages/reset_password'

describe('ResetPasswordPage', () => {

  it('renders a reset password page', () => {
    render(<ResetPasswordPage />)

    const new_password = screen.getByTestId('new_password')

    expect(new_password).toBeInTheDocument()

    const confirm_password = screen.getByTestId('confirm_password')

    expect(confirm_password).toBeInTheDocument()

    const submit_button = screen.getByTestId('submit_button')

    expect(submit_button).toBeInTheDocument()
  })
})
