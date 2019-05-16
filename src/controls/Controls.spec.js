// Test away!
import React from 'react'
import {render, fireEvent} from "react-testing-library";
import Controls from "./Controls";
import 'react-testing-library/cleanup-after-each'

// afterEach(cleanup)

describe('Display Component', () => {
	it('cannot be closed or opened if it is locked', () => {
		const {getByTestId} = render(<Controls locked={true}/>);
		const lockBtn = getByTestId('lock-button');
		const closeBtn = getByTestId('close-button');
		expect(lockBtn.disabled).toBe(true);
		expect(closeBtn.disabled).toBe(true);
	})
	
	it('can be closed or opened if it is unlocked', () => {
		const {getByTestId} = render(<Controls locked={false}/>);
		const lockBtn = getByTestId('lock-button');
		const closeBtn = getByTestId('close-button');
		expect(closeBtn.disabled).toBe(false);
		expect(lockBtn.disabled).toBe(true);
	})
	
	it('the closed toggle button is disabled if the gate is closed', () => {
		const {getByTestId} = render(<Controls locked={true}/>);
		const closeBtn = getByTestId('close-button');
		expect(closeBtn.disabled).toBe(true)
	})
	
	it('the locked toggle button is disabled if the gate is open', () => {
		const {getByTestId} = render(<Controls locked={false}/>);
		const lockBtn = getByTestId('lock-button');
		expect(lockBtn.disabled).toBe(true)
	})
	
	it('lock button text changes to "Unlock Gate" when it is in the locked state', () => {
		const toggleLocked = jest.fn()
		const {getByTestId} = render(<Controls/>);
		const lockBtn = getByTestId('lock-button');
		fireEvent.click(lockBtn)
		// expect(toggleLocked).toHaveBeenCalledTimes(1)
		expect(lockBtn.textContent).toBe('Unlock Gate')
	})
	
	//
	// it('should have buttons that can toggle closed', () => {
	// 	const {getByTestId} = render(<Controls closed={false}/>);
	// 	const closeBtn = getByTestId('close-button');
	// 	fireEvent.click(closeBtn)
	// 	expect(closeBtn.disabled).toBe(false)
	// })
})

