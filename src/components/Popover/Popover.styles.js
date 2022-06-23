import styled from 'styled-components'

export const PopoverStyles = styled.div`
	> a {
		text-decoration: none;
	}
	.box-quicks {
		display: flex;
		align-items: center;
		.quicks-title {
			color: #000;
			margin-bottom: 5px;
			font-size: 1.4rem;
		}
		.quicks-text {
			padding: 2px 0;
			font-size: 1.2rem;
		}
	}
	.popover__title {
		font-size: 24px;
		line-height: 36px;
		text-decoration: none;
		color: rgb(228, 68, 68);
		text-align: center;
		padding: 15px 0;
	}

	position: relative;
	margin-top: 1.5rem;
	display: inline-block;

	.popover__content {
		opacity: 0;
		visibility: hidden;
		position: absolute;
		left: -150px;
		transform: translate(0, 10px);
		background-color: #bfbfbf;
		padding: 1.5rem;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
		width: auto;
	}
	.popover__content:before {
		position: absolute;
		z-index: -1;
		content: '';
		right: calc(50% - 10px);
		top: -8px;
		border-style: solid;
		border-width: 0 10px 10px 10px;
		border-color: transparent transparent #bfbfbf transparent;
		transition-duration: 0.3s;
		transition-property: transform;
	}
	&:hover .popover__content {
		z-index: 10;
		opacity: 1;
		visibility: visible;
		transform: translate(0, -20px);
		transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
	}
	.popover__message {
		text-align: center;
	}
`