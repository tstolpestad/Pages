/**
 * Created by Tonje on 12/18/2018.
 */
import {PageElement} from './PageElement'
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

describe("PageElement", ()=> {
	const testelement = {
		title: "test"
	}
	let wrapper = shallow(<PageElement element={testelement}/>);
	it("should match snapshot, for regression testing", ()=> {
		expect(toJson(wrapper)).toMatchSnapshot();
	})
	it("should render an element with text", ()=> {
		expect(wrapper.text()).toEqual("/" + testelement.title);
	})
	it("should be a draggable element", ()=> {
		expect(toJson(wrapper).type).toEqual("div");
		wrapper = shallow(<PageElement element={testelement} dnd={true}/>)
		expect(toJson(wrapper).type).toEqual("Connect(Draggable)");
	})
})
