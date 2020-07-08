import React from 'react';
import "@testing-library/jest-dom"
import { mount,  configure} from "enzyme";    
import Adapter from "enzyme-adapter-react-16"

import { LoginScreen } from "../../Login/LoginScreen"
import { AuthContext } from '../../auth/AuthContext';
import {types } from "../../types/authTypes"


configure({adapter: new Adapter()});


describe('Prueba de Login Screen <LoginScreen />', () => {
   // creating mocks for test
    const ContextValues = {
        dispatch:jest.fn(),
        payload:{
            user:{name:'REACJS'}
        }
    }
    const HistoryMock = {
        replace: jest.fn()
    }
            const wrapper = mount(
               <AuthContext.Provider value={ContextValues}>
                    <LoginScreen history={HistoryMock}></LoginScreen>
               </AuthContext.Provider>);

  const handleClick = wrapper.find('button').prop('onClick');
  
  
  test('Debe mostrarse correctamente', () => {
      // make snapshot for the display
     console.log(wrapper.html())
     expect(wrapper).toMatchSnapshot();
  })
   
  test('debe realizar el dispatch ', () => {

    
    handleClick();
    expect(ContextValues.dispatch).toHaveBeenCalledWith({
        type: types.LOGIN,
        payload: { name: "Leudi Rosario, Reactjs" },
      });
      
      //lastpath
    
  })
  test('Probando el localstorage', () => {
    expect(HistoryMock.replace).toHaveBeenCalledWith('/')
    localStorage.setItem('lastpath','/dc')
    handleClick();
    expect(HistoryMock.replace).toHaveBeenCalledWith('/dc')

  })
  
  




})
