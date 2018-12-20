/**
 * Created by Tonje on 12/18/2018.
 */
import {PageElement} from './PageElement'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';



describe("PageElement", ()=> {
	const testText = "test"
	const wrapper = shallow(<PageElement element={testText}/>);
	it("should match snapshot, for regression testing", ()=>{
		expect(toJson(wrapper)).toMatchSnapshot();
	})
	it("should render an element with text", ()=>{
		expect(wrapper.text()).toEqual(testText);
	})
	it("should be a draggable element", ()=> {
		expect(false).toBe(true) //Todo:implement test
	})
})
