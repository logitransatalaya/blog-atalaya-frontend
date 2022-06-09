import styled from 'styled-components'

export const LayoutStyles = styled.div`
	background: url(${require('assets/images/background.png')}) no-repeat 0,
		0 var(--sky);
	background-blend-mode: multiply;
	background-attachment: fixed, scroll;
	background-repeat: no-repeat;
	height: 100vh;
	overflow-y: scroll;
	position: relative;
	padding-top: 3rem;
	scroll-behavior: smooth;
	.logo {
		text-align: center;
		color: #fff;
		position: relative;
	}
	.outlet {
		padding: 0 8rem;
	}
	@media screen and (max-width: 767px) {
		background: url(${require('assets/images/background2.png')}) no-repeat 0,
			0 var(--sky);
		.outlet {
			padding: 0;
			margin-top: 2rem;
		}
	}
`
