import './matchMedia.mock';
import { render } from '@testing-library/react'
import ResetPasswordPage from '@/pages/reset_password'

it('render reset password page', () => {
  const { container } = render(<ResetPasswordPage />)
  expect(container).toMatchSnapshot()
})
