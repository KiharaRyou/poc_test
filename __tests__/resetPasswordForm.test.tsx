import './matchMedia.mock'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ResetPasswordForm from '@/pages/reset_password/ResetPasswordForm'

const passwords: string[] = [
  '', // empty
  '!1abc_', //shorter than 8
  '!abcdef_', //without number
  'abcdefg1', //without spescial character
  '!abcdef1', //only 1 spescial character
  '!abcde1_', //8 characters, 1 number, 2 spescial characters
  'aaaaaaaaaaaaaaaa' // larger than 15 
]

describe('ResetPasswordForm', () => {
  passwords.forEach((password:string) => {
    it(`test ${password} as reset password`, async () => {
      render(<ResetPasswordForm />)
  
      const logSpy = jest.spyOn(global.console, 'log')
  
      const new_password = screen.getByTestId('new_password')
      const confirm_password = screen.getByTestId('confirm_password')
      const submit_button = screen.getByTestId('submit_button')

      await waitFor(() => {
        fireEvent.change(new_password, {target: {value: password}})
        fireEvent.change(confirm_password, {target: {value: password}})
        fireEvent.click(submit_button)
      })
      
      if(password === '') {
        expect(logSpy.mock.calls[0][0]).toHaveLength(2)
        expect(logSpy.mock.calls[0][0][0].errors[0]).toBe('Please input your password!')
        expect(logSpy.mock.calls[0][0][1].errors[0]).toBe('Please confirm your password!')
      } else if (password === '!abcde1_' || password === 'aaaaaaaaaaaaaaaa') {

        expect(logSpy.mock.calls[0][0].password).toBe(password)
        
      } else {
        expect(logSpy.mock.calls[0][0]).toHaveLength(1)
        expect(logSpy.mock.calls[0][0][0].name[0]).toBe('password')
        expect(logSpy.mock.calls[0][0][0].errors[0]).toBe('Please hover on the question mark to check the password rules.')
      }
      
      logSpy.mockClear()
    })
  })

  it(`test do not match`, async () => {
    render(<ResetPasswordForm />)

    const logSpy = jest.spyOn(global.console, 'log')

    const new_password = screen.getByTestId('new_password')
    const confirm_password = screen.getByTestId('confirm_password')
    const submit_button = screen.getByTestId('submit_button')

    await waitFor(() => {
      fireEvent.change(new_password, {target: {value: '!abcde1_'}})
      fireEvent.change(confirm_password, {target: {value: '!abcde1#'}})
      fireEvent.click(submit_button)
    })
    
    expect(logSpy.mock.calls[0][0]).toHaveLength(1)
    expect(logSpy.mock.calls[0][0][0].name[0]).toBe('confirm')
    expect(logSpy.mock.calls[0][0][0].errors[0]).toBe('The new password that you entered do not match!')

    
    logSpy.mockClear()
  })
  
})