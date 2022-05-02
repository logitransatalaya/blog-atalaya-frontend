import styled from 'styled-components'

export const CreateAccountStyles = styled.div`
	margin: 0 10rem;
	background: #fff;
	color: #0b2370;
	padding: 4rem 12rem;
	border-radius: 10px;
	min-height: 80vh;
	h2 {
		padding: 2rem 5rem 6rem 5rem;
	}
	form {
		display: grid;

		grid-template-columns: 200px 1fr;
		grid-gap: 16px;

		.col-25 {
			h4 {
				padding-top: 1rem;
			}

			text-align: end;
		}
		.col-75 {
			input {
				background: #ffffff;
				border: 2px solid #acacac;
				border-radius: 10px;
				padding: 0.8rem 1rem;
				min-width: 30rem;
			}
		}
	}
	.error-message {
		padding: 0.5rem;
	}
	.box-actions {
		grid-column-start: 2;
		max-width: 30rem;
		display: flex;
		gap: 1rem;
		padding-top: 1rem;
		button {
			background: #0b2370;
			border-radius: 19px;
			font-size: 1.8rem;
			font-weight: bold;
			color: #ffffff;
			padding: 1rem;
			width: 100%;
			&:hover {
				cursor: pointer;
				background: #e55c1e;
			}
		}
	}

	@media screen and (max-width: 767px) {
		margin: 0;
		background: #fff;
		color: #0b2370;
		padding: 1rem;
		border-radius: 10px;
		min-height: 80vh;
		form {
			grid-template-columns: 1fr;
			.col-25 {
				text-align: start;
				h4 {
					padding-top: 0;
				}
			}
		}
		.box-actions {
			grid-column-start: 1;
		}
	}
`
