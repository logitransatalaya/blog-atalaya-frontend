import styled from 'styled-components'

export const FormDeletePostStyles = styled.div`
	height: 90vh;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	.box-content {
		max-width: 800px;
		width: 100%;
		background-color: #fff;
		padding: 5rem 6rem;
		border: 1px solid #707070;
		border-radius: 30px;

		.head-form {
			grid-column-start: 1;
			grid-column-end: 3;
			display: flex;
			justify-content: flex-end;
			right: -40px;
			top: -20px;
			position: relative;
			span {
				border: 1px solid #4554;
				padding: 0.5rem;
				cursor: pointer;
			}
		}
	}

	.box-actions {
		padding-top: 3rem;
		grid-gap: 1rem;
		grid-column-start: 1;
		grid-column-end: 3;
		display: flex;
		justify-content: center;
		.btn-cacel {
			cursor: pointer;
			background-color: #0b2370;
			color: #fff;
			padding: 0.5rem 1rem;
			border: 2px solid #0b2370;
			border-radius: 5px;
			font-weight: bold;
			font-size: 1.6rem;
		}
		.btn-send {
			cursor: pointer;
			background-color: #fff;
			color: #0b2370;
			padding: 0.5rem 1rem;
			border: 2px solid #0b2370;
			border-radius: 5px;
			font-weight: bold;
			font-size: 1.6rem;
			width: 100px;
		}
	}
	@media screen and (max-width: 767px) {
	}
`
