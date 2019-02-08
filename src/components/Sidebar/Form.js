import React, { PureComponent, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCategory } from 'Actions/categories';

const mapStateToProps = ({ categories }) => ({ categories });

class Form extends PureComponent {
	static propTypes = {
		categories: PropTypes.arrayOf(PropTypes.object),
		addCategory: PropTypes.func
	}

	input = createRef();

	addACategory = e => {
		e.preventDefault();

		const input = this.input.current;
		const value = input.value.trim();
		const hasDuplicate = this.props.categories.some(({name}) => (name === value));

		if(!value || hasDuplicate || value.length < 2) {
			return;
		}

		this.props.addCategory(value);
		input.value = '';
	}

	render() {
		return(
			<form className='sidebar__form' onSubmit={this.addACategory}>
				<input
					className='sidebar__form-input'
					type='text'
					name='category'
					placeholder='Enter a category here'
					ref={this.input}
					autoFocus />

				<input className='sidebar__form-submit' type='submit' />
			</form>
		)
	}
}

export default connect(mapStateToProps, { addCategory })(Form);