import React from "react";
import Adapter from "enzyme-adapter-react-16"
import {mount, configure} from "enzyme";    
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../auth/AuthContext";
import AppRoute from "../../routes/AppRoute";

configure({adapter: new Adapter()});

describe('Prueba del <AppRoute .></AppRoute>', () => {
    // variabel fot test
    const contextValues  ={
        dispatch:jest.fn(),
        user:{
            logged:false
        }
    }
   test('deberia de retornar el login si no esta logeado ', () => {
       const wrapper = mount(
     <AuthContext.Provider value={contextValues}> 
         <AppRoute></AppRoute>
     </AuthContext.Provider>
       );
       console.log(wrapper.html())
       expect(  wrapper ).toMatchSnapshot();
   })
   
   test('should ruturn marvel catalogs', () => {
    const _contextValues  ={
        dispatch:jest.fn(),
        user:{
            logged:true,
            name:"Pedro Juan Varon"
             
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={_contextValues}> 
            <AppRoute></AppRoute>
        </AuthContext.Provider>
          );
          console.log(wrapper.html())
        //    expect(  wrapper.find("login").exists()),toBe("true");
   })
   
   

})
