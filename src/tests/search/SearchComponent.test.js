import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import { SearchComponent } from '../../search/SearchComponent'
import Adapter from "enzyme-adapter-react-16"
import { mount,  configure} from "enzyme";   
import '@testing-library/jest-dom'
configure({adapter: new Adapter()});

describe('Probando el <Search />', () => {
  
  const wrapper = mount(
         <MemoryRouter initialEntries={['/search']}>
             <Route path='/search' component={SearchComponent}>  
             </Route>
         </MemoryRouter>
  )


     test('Probar el display por default', () => {
        expect(wrapper).toMatchSnapshot();
     })
     test('Probando que muestro texto de buscar', () => {
       expect(wrapper.find('.alert-info').text().trim()).toBe('Search a heroe')
     })

     test('Probar que la busqueda tenga el mismo valor que la url', () => {
            const _queryWrapper = mount(
                            <MemoryRouter initialEntries={['/search?q=superman']}>
                                    <Route path='/search' component={SearchComponent}>  
                                    </Route>
                            </MemoryRouter>
                    )
            expect(
                _queryWrapper.find('input').prop('value')
            ).toBe('superman');

     })

    
    
     test('should be a text error if url is wrong like as232212', () => {
        const _queryWrapper = mount(
            <MemoryRouter initialEntries={['/search?q=superman123']}>
                    <Route path='/search' component={SearchComponent}>  
                    </Route>
            </MemoryRouter>
    );
     console.log(_queryWrapper.find('.alert-danger').text().trim(),'aqui debe decir algo')
     expect(_queryWrapper.find('.alert-danger').text().trim()).toBe('there is no a heroe with superman123')
     //console.log(_queryWrapper.html())
     expect(_queryWrapper).toMatchSnapshot();
     
        })

     
     test('Debe de llmar el push del history ', () => {
    
     // config wrapper and hisortiry
        const history = {
        push:jest.fn()
    }  
            const wrapper = mount(
                <MemoryRouter initialEntries={['/search?q=batman123']}>
            <Route path="/search"
            component={()=> <SearchComponent history={history} />}
            >
            </Route>
                </MemoryRouter>
            )
    

    wrapper.find('input').simulate('change',{
    target:{
        name:'searchText',
        value:'batman'
    }
    });
    // make test
    wrapper.find('form').prop('onSubmit')({

         preventDefault(){}
    })
   //      console.log(wrapper.html())
     expect(history.push).toHaveBeenCalledWith('?q=batman123');





     })
     
     
     





})
