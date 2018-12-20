import {PageList} from './PageList'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';

describe("PageList", ()=> {
	const pages = ["test", "test/page"];
	const wrapper = shallow(<PageList pages={pages} />);
	const wrapperWithTitle = shallow(<PageList pages={pages} title="PageListTest"/>);
	it("should match snapshot for regression testing", ()=>{
		expect(toJson(wrapper)).toMatchSnapshot();
	});
	it("should render a list of page elements ", ()=> {
		expect(toJson(wrapper.find("PageElement")).length).toEqual(2);
	});
	it("should have an optional title", ()=>{
		expect(wrapper.find('.title')).toHaveLength(0);
		expect(wrapperWithTitle.find('.title')).toHaveLength(1);
	});
	it("should be a droppable", ()=> {
		expect(false).toBe(true) //Todo:implement test
	});
	it("should be collapsable if it has a title", ()=>{
		expect(false).toBe(true) //Todo:implement test
	});
});
