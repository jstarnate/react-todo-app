import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

export default (event, otherData = null) => (
	class extends PureComponent {
		static propTypes = {
			list: PropTypes.arrayOf(PropTypes.object).isRequired,
			value: PropTypes.string,
			icon: PropTypes.element.isRequired,
			windowEvent: PropTypes.func.isRequired
		}

		input = createRef()

		componentDidMount() {
			window.addEventListener('keyup', this.disableForm);
		}

		componentWillUnmount() {
			window.removeEventListener('keyup', this.disableForm);
		}

		disableForm = e => {
			if(e.key === 'Escape' || e.code === 'Escape' || e.which === 27 || e.keyCode === 27) {
				this.props.windowEvent();
			}
		}

		submitEvent = e => {
			e.preventDefault();

			const input = this.input.current;
			const value = input.value.trim();
			const hasDuplicate = this.props.list.some(item => item.description === value);

			if(
				!value ||
				hasDuplicate ||
				value.length < 6 ||
				value.length > 30 ||
				!/^[A-Za-z0-9 ]+$/.test(value)
			) {
				return;
			}

			event(value, otherData);
			input.value = '';
		}

		render() {
			const { value, icon } = this.props;

			return(
				<li className='todo__form-wrap'>
					<form className='todo__form flex' onSubmit={this.submitEvent}>
						<input
							className='todo__input'
							type='text'
							name='description'
							placeholder='Must be 6-30 characters long'
							defaultValue={value}
							ref={this.input}
							autoFocus />

						<button type='submit' className='todo__submit button'>{icon}</button>
					</form>
				</li>
			)
		}
	}
)