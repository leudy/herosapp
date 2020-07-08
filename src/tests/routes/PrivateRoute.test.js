import React from "react";
import Adapter from "enzyme-adapter-react-16"
import {mount, configure} from "enzyme";    
import { PrivateRoute } from "../../routes/PrivateRoute";
import { MemoryRouter } from 'react-router-dom';

configure({adapter: new Adapter()});

describe('Probar el <PrivaterRoute></PrivaterRoute>', () => {
    const props = {
        location:{
            pathname:'/dc',
            search: "q=batman"
        }
    };
    test('debe de retornar una ruta si esta logeado el usuario y guardar en localstorage', () => {
        const wrapper = mount(          
            <MemoryRouter>
                        <PrivateRoute IsAuthenticated={true}
                         component={()=><span>Hola mundo</span>}
                        {...props}
                        ></PrivateRoute>
                </MemoryRouter>
        );
       console.log(wrapper.html());
        expect( wrapper.find('span').exists() ).toBe(true);
    })
   test('should not return any values if it not login', () => {
    const wrapper = mount(          
        <MemoryRouter>
                    <PrivateRoute IsAuthenticated={false}
                     component={()=><span>Hola mundo</span>}
                    {...props}
                    ></PrivateRoute>
            </MemoryRouter>
    );
   console.log(wrapper.html());
    expect( wrapper.find('span').exists() ).toBe(false);
   })
   // this enable the test 
  Storage.prototype.setItem = jest.fn();

   test('should be ensure that localstorae will be called', () => {
    
    const wrapper = mount(          
        <MemoryRouter>
                    <PrivateRoute IsAuthenticated={true}
                     component={()=><span>Hola mundo</span>}
                    {...props}
                    ></PrivateRoute>
            </MemoryRouter>
    );false
    expect( localStorage.setItem  ).toHaveBeenCalledWith("lastpath","/dc")
   })
   
   
    
})
