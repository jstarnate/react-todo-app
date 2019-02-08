import React from 'react';

export const PlusIcon = ({ fill, size }) => (
	<svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="12.5" width="5" height="30" fill={fill}/>
		<rect y="17.5" width="5" height="30" transform="rotate(-90 0 17.5)" fill={fill}/>
	</svg>
)

export const CancelIcon = ({ fill, size }) => (
	<svg width={size} height={size} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect y="3.53552" width="5" height="37.5118" transform="rotate(-45 0 3.53552)" fill={fill}/>
		<rect x="26.5248" width="5" height="37.5118" transform="rotate(45 26.5248 0)" fill={fill}/>
	</svg>
)

export const CheckedIcon = () => (
	<svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="30" height="30" rx="5" fill="#555555"/>
		<rect x="21.4694" y="8.84479" width="3" height="15" transform="rotate(45.2076 21.4694 8.84479)" fill="white"/>
		<rect x="8" y="16.5683" width="3" height="7.00873" transform="rotate(-44.7924 8 16.5683)" fill="white"/>
	</svg>
)

export const UncheckedIcon = () => (
	<svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="1.5" y="1.5" width="27" height="27" rx="3.5" stroke="#555555" strokeWidth="3"/>
	</svg>
)

export const EditIcon = ({ fill }) => (
	<svg width="20" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="27.9607" width="8" height="30" transform="rotate(45 27.9607 0)" fill={fill}/>
		<path d="M4.62619 23.3345L10.283 28.9914L2.82844 30.7891L4.62619 23.3345Z" fill={fill}/>
	</svg>
)

export const MenuIcon = () => (
	<svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="20">
			<rect width="25" height="20" fill="white"/>
		</mask>
		<g mask="url(#mask0)">
			<rect width="25" height="4" rx="2" fill="#21A1E1"/>
			<rect y="8" width="25" height="4" rx="2" fill="#21A1E1"/>
			<rect y="16" width="25" height="4" rx="2" fill="#21A1E1"/>
		</g>
	</svg>
)

export const UpIcon = () => (
	<svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="29.9578" y="14.8492" width="4" height="21" transform="rotate(135 29.9578 14.8492)" fill="white"/>
		<rect x="14.4223" y="0.707092" width="4" height="20.3962" transform="rotate(45 14.4223 0.707092)" fill="white"/>
		<rect x="16.9578" y="3" width="27" height="4" transform="rotate(90 16.9578 3)" fill="white"/>
	</svg>
)