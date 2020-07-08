import React from "react";
import Adapter from "enzyme-adapter-react-16"
import {mount, configure} from "enzyme";    
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../auth/AuthContext";
import { ComicsRoute } from "../../routes/ComicsRoute";
configure({adapter: new Adapter()});


describe('Probando el Comics Route', () => {
    const _contextValues  ={
        dispatch:jest.fn(),
        user:{
            logged:true,
            name:"Pedro Juan Varon"
             
        }
    }
    test('should be display correctly', () => {
        const wrapper = mount(
            <MemoryRouter>
                 <AuthContext.Provider value={_contextValues}> 
                <ComicsRoute></ComicsRoute>
            </AuthContext.Provider>
            </MemoryRouter>
           
              );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".text-info").text().trim()).toBe(_contextValues.user.name);

    })
    
})
