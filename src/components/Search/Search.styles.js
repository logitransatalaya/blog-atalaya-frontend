import styled from 'styled-components'

export const SearchStyles = styled.div`
	border: 3px solid var(--primary-grey);
	border-radius: 26px;
	width: 100%;
	color: #fff;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	font-size: 2rem;
	cursor: pointer;
	overflow: hidden;
	max-width: 640px;
	z-index: 400;
	.title {
		opacity: 0;
		visibility: hidden;
		transition: all 0.4s;
	}

	&:hover .title {
		opacity: 1;
		visibility: visible;
	}
	.linea {
		width: 100%;
		font-size: 4rem;
		margin-bottom: 0.7rem;
		opacity: 0;
		left: 30%;
		position: absolute;

		transition: all 0.4s;
	}
	&:hover .linea {
		opacity: 1;
		transform: translate(58%, 0);
		visibility: visible;
	}
	&:hover .linea {
		opacity: 1;
	}
	.term {
		width: 90%;
		background: transparent;
		border: none;
		padding: 5px;
		height: 100%;
		outline: none;
		color: #fff;
		font-size: 2rem;
	}
	@media screen and (max-width: 767px) {
		&:hover .linea {
			transform: translate(51%, 0);
		}
	}
`
