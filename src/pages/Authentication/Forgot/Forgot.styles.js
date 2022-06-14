import styled from 'styled-components'

export const ForgotStyles = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	.box-recovery {
		padding: 5rem 4rem;
		margin: auto;
		background: #fff;
		width: 100%;
		max-width: 425px;
		box-shadow: 0px 0px 10px #000000b3;
		border-radius: 1rem;
	}
	.box-logo {
		text-align: center;
		> img {
			width: 220px;
		}
	}
	h3 {
		font-size: 1.8rem;
		color: #0b2370;
		padding: 5rem 0 1rem;
	}
	input {
		width: 100%;
		border: 1px solid #dddddd;
		border-radius: 9px;
		padding: 1rem;
		margin-top: 1rem;
	}
	.error-message {
		padding: 0.5rem;
		color: red;
	}
	.box-txt {
		width: 100%;

		padding: 2rem 0 1rem 0;
		p {
			color: #000000b3;
			font-size: 1.3rem;
			font-weight: bold;
		}
	}
	.box-next {
		text-align: end;
		padding: 1rem 0;
		position: relative;
		button {
			position: relative;
			border: 2px solid #0b2370;
			border-radius: 5px;
			width: 172px;
			height: 43px;
			color: #0b2370;
			font-size: 1.5rem;
			font-weight: bold;
			transition: background-color 0.5s linear;
			pointer-events: ${({ state }) => (state ? 'none' : 'auto')};
			&:hover {
				background-color: #0b2370;
				color: #fff;
				cursor: pointer;
				.box-loading::after {
					border-top-color: #fff;
				}
			}
		}
		.box-loading {
			::after {
				content: '';
				position: absolute;
				width: 16px;
				height: 16px;
				padding: 5;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				border: 4px solid transparent;
				border-top-color: #0b2370;
				border-radius: 50%;
				animation: button-loading-spinner 1s ease infinite;
			}
		}
	}

	.box-sent-email {
		padding: 2rem 0 1rem 0;
		.text-message {
			font-size: 1.5rem;
			color: #0b2370;
		}
	}
	@keyframes button-loading-spinner {
		from {
			transform: rotate(0turn);
		}
		to {
			transform: rotate(1turn);
		}
	}
`
