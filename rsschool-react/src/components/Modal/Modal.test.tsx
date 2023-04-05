/* eslint-disable react/no-children-prop */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Modal from './Modal'
import { vi } from 'vitest'
const func = vi.fn()
describe('Modal component', () => {
    it('Modal render', () => {
        render(<Modal onClose={func} children={undefined} />)
        expect(screen.getByRole('dialog')).toBeInTheDocument()
    })
})
