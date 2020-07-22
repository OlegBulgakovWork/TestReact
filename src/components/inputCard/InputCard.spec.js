import React from 'react'
import { shallow } from 'enzyme'
import InputCard from './InputCard'

describe('Input Card', () => {
    const props = {
        setName: () => { },
        setGender: () => { },
        gender: '',
        setAge: () => { },
        setEmail: () => { },
        setCountry: () => { },
        setCity: () => { },
        setUploadedFile: () => { },
        uploadedFile: [],
        setDate: () => { },
        date: '',
        setDisabled: () => { }
    }

    describe('Returns component', () => {
        const container = shallow(<InputCard {...props} />)

        it(' render <div>', () => {
            expect(container.find('div')).toHaveLength(4)
        })

    })

})