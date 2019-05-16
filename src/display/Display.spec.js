// Test away!
// Test away!
import React from 'react'
import {render} from "react-testing-library";
import Display from "./Display";
import 'react-testing-library/cleanup-after-each'

describe('Display Component', () => {
	it('should displays "Closed" if the closed prop is true and "Open" ', () => {
		const {getByTestId} = render(<Display closed={false}/>);
		const closedDisplay = getByTestId('closed-display');
		expect(closedDisplay.textContent).toBe('Open');
	})
	
	it('should displays "Open" if the closed prop is true" ', () => {
		const {getByTestId} = render(<Display closed={true}/>);
		const closedDisplay = getByTestId('closed-display');
		expect(closedDisplay.textContent).toBe('Closed');
	})
	it('displays "Locked" if the locked prop is true', () => {
		const {getByTestId} = render(<Display locked={true}/>);
		const lockedDisplay = getByTestId('locked-display');
		expect(lockedDisplay.textContent).toBe('Locked');
	})
	
	it('should displays "Unlocked" if locked prop is false" ', () => {
		const {getByTestId} = render(<Display locked={false}/>);
		const lockedDisplay = getByTestId('locked-display');
		expect(lockedDisplay.textContent).toBe('Unlocked');
	})
	
	it('should use red-led class when locked', () => {
		const { getByTestId} = render(<Display locked={true}/>);
		const lockedDisplay = getByTestId('locked-display');
		expect(lockedDisplay.className.indexOf('red-led')).not.toBeLessThan(0)
	})
	
	// QUESTIONS
	//
	// it('should use green-led class when unlocked', () => {
	// 	const { getByTestId} = render(<Display locked={false}/>);
	// 	const lockedDisplay = getByTestId('locked-display');
	// 	expect(lockedDisplay.className.indexOf('green-led')).not.toBeLessThan(0)
	// })
})

