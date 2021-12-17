import { render, screen, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event';
import FormResa from './form-resa'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { STATUS_TODO } from '../../../constants/status';

describe('Reservation form', () => {
    
    const onSubmit= jest.fn()
    beforeEach(()=>{

        const initialState = {}
        const mockStore = configureStore()
        const store= mockStore(initialState)
        render(
            <Provider store={store}>
                <Router> <FormResa onFormSubmit={onSubmit}/> </Router> 
            </Provider>
             )
        
    })

    it('renders the form fields', ()=>{
        expect(screen.getByLabelText('Reservation name')).toBeInTheDocument()
        expect(screen.getByLabelText('Store')).toBeInTheDocument()
        
        expect(screen.queryByText('Anything else')).not.toBeInTheDocument()
        
        expect(screen.queryByText('Save')).toBeInTheDocument()
        expect(screen.queryByText('Cancel')).toBeInTheDocument()

        
    })

    it('simulates the form submit', ()=>{
        const name_input= screen.getByTestId('name-input')
        const store_select= screen.getByTestId('store-select')
        const status_todo= screen.getByTestId('status-todo')
        const the_form= screen.getByTestId('the-form')
        
        expect(name_input).toBeInTheDocument()
        expect(store_select).toBeInTheDocument()
        expect(status_todo).toBeInTheDocument()
        expect(the_form).toBeInTheDocument()

        user.type(name_input, 'New reservation')
        expect(screen.getByTestId('name-input')).toHaveValue('New reservation')
        
        user.selectOptions(store_select, 'AMS')
        expect(screen.getByTestId('store-select')).toHaveValue('AMS')
        
        
        fireEvent.click(status_todo)
        expect(screen.getByTestId('status-todo')).toBeChecked()


        fireEvent.submit(the_form)

        expect(onSubmit).toHaveBeenCalled()

    })
})