import {PageLists} from "./PageLists"
import React from 'react';


//Seems like there isn't a way to trigger the useEffect hook from tests for now :  https://github.com/facebook/react/issues/14050
//Without this functionality I don't think there would be much useful to test here
//todo: when useEffect can be triggered from tests: implement testing here.


describe("PageLists", ()=> {

	it("should test something", ()=>{
		expect(true).toEqual(true)
	});
});
