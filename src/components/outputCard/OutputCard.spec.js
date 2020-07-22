import React from 'react'
import { shallow } from 'enzyme'
import OutputCard from './OutputCard'

describe('Output Card', () => {
    const props = {
        name: '',
        gender: '',
        age: '',
        email: '',
        country: '',
        city: '',
        uploadedFile: [],
        date: '',
    }

    describe('Returns component', () => {
        const container = shallow(<OutputCard {...props} />)

        it(' render <div>', () => {
            expect(container.find('div')).toHaveLength(3)
        })

    })

})