import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './header'
import {BrowserRouter as Router} from 'react-router-dom'

describe('Header component', ()=>{

    it('renders the default title on the header', () => {
      render(<Router> <Header /> </Router> )
      expect(screen.getByText('Reservations')).toBeInTheDocument()
    })
    
    it('renders the link "create" to create new reservation', () => {
      render(<Router> <Header /> </Router> )
      expect(screen.getByText('Create')).toBeInTheDocument()
    })
})