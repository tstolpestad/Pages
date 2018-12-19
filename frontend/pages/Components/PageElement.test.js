/**
 * Created by Tonje on 12/18/2018.
 */
import {PageElement} from './PageElement'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';



describe("PageElement", ()=> {
	const wrapper = shallow(<PageElement element="test"/>);
	it("should match snapshot, for regression testing", ()=>{
		expect(toJson(wrapper)).toMatchSnapshot();
	})
	it("should render an element with text", ()=>{
		console.log(toJson(wrapper))
		expect(toJson(wrapper)).toBe(true);
	})
	it("should be a droppable element", ()=> {

	})
})
