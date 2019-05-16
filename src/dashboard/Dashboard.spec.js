// Test away
import React from 'react'
import {render} from 'react-testing-library'
import Dashboard from "./Dashboard";
import renderer from 'react-test-renderer'
import Display from "../display/Display";
import 'react-testing-library/cleanup-after-each'
import Controls from "../controls/Controls";

describe('Dashboard', () => {
	it('should shows the controls and display', () => {
		const {container, getByTestId} = render(<Dashboard />);
		const display = getByTestId('display');
		const controls = getByTestId('controls');
		expect(display).toBeVisible;
		expect(controls).toBeVisible;
	})
	
	it('should be at unlocked and open state by default', () => {
		const dashboard =  renderer.create(<Dashboard />).root
		expect(dashboard.findByType(Display).props.locked).toBe(false);
		expect(dashboard.findByType(Display).props.closed).toBe(false);
	})
	//
	// it('should have buttons that can toggle locked', () => {
	// 	const dashboard =  renderer.create(<Dashboard />).root
	//
	// 	const lockBtn = getByTestId('lock-button');
	// 	const closeBtn = getByTestId('close-button');
	// 	fireEvent.click(lockBtn)
	// 	expect(lockBtn.disabled).toBe(true)
	// })
	//
	// it('should have buttons that can toggle closed', () => {
	// 	const {getByTestId} = render(<Controls closed={false}/>);
	// 	const closeBtn = getByTestId('close-button');
	// 	fireEvent.click(closeBtn)
	// 	expect(closeBtn.disabled).toBe(false)
	// })

	
})

