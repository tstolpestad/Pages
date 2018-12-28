import {PageList} from './PageList'
import React from 'react';
import TestRenderer from 'react-test-renderer';

//this test has to use react's test renderer as enzyme does not have support for hooks yet
//Todo: consider changing to react-test-renderer for the entire app


describe("PageList", ()=> {
	const pages = ["test", "test/page"];
	const wrapper = TestRenderer.create(<PageList pages={pages} />);
	const wrapperWithTitle = TestRenderer.create(<PageList pages={pages} title="PageListTest"/>);
	it("should match snapshot for regression testing", ()=>{
		expect(wrapper.toJSON).toMatchSnapshot();
		expect(wrapperWithTitle.toJSON).toMatchSnapshot();
	});
	it("should render a list of page elements ", ()=> {
		console.log(wrapper.toJSON)
		expect(wrapper.root.findByType("PageElement").length).toEqual(2);
	});
	it("should have an optional title", ()=>{
		expect(wrapper.root.findAllByProps({className: "title"})).toHaveLength(0);
		expect(wrapperWithTitle.root.findAllByProps({className: "title"})).toHaveLength(1);
	});
	it("should be a droppable", ()=> {
		expect(false).toBe(true) //Todo:implement test
	});
	it("should be collapsable if it has a title", ()=>{
		expect(false).toBe(true) //Todo:implement test
	});
});
