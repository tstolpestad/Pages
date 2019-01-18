import {PageList} from './PageList'
import React from 'react';
import TestRenderer from 'react-test-renderer'
import {DragDropContext} from "react-beautiful-dnd";


//this test has to use react's test renderer as enzyme does not have support for hooks yet
//Todo: consider changing to react-test-renderer for the entire app


describe("PageList", ()=> {
	const pages = [{title:"test", id: "test"}, {title:"test/page", id: "test/page"}];
	const wrapper = TestRenderer.create(<PageList pages={pages} />);
	const wrapperWithTitle = TestRenderer.create(<PageList pages={pages} title="PageListTest"/>);

	it("should render a list of page elements ", ()=> {
		expect(wrapper.root.findAllByProps({className: 'element'})).toHaveLength(2);
	});
	it("should have an optional title", ()=>{
		expect(wrapper.root.findAllByProps({className: 'title'})).toHaveLength(0);
		expect(wrapperWithTitle.root.findAllByProps({className: 'title'})).toHaveLength(1);
	});
	it("should be a droppable", ()=>{
		//Currently there doesn't seem to be a standard for testing react-beautiful-dnd and examples/guidelines are missing
		// https://github.com/atlassian/react-beautiful-dnd/issues/623
		//This test should be implemented when those exist
		expect(true).toBe(true) //Todo:implement test
	});
	it("should be collapsable if it has a title", ()=>{
		expect(wrapperWithTitle.root.findAllByProps({className: 'element'})).toHaveLength(2);
		const title = wrapperWithTitle.root.findByProps({className: 'title'});
		expect(typeof title.props.onClick).toBe('function');
		title.props.onClick();
		expect(wrapperWithTitle.root.findAllByProps({className: 'element'})).toHaveLength(0);


	});
});
