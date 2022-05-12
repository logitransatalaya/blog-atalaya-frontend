import styled from 'styled-components'

export const MainLayoutStyles = styled.div`
	background: url(${require('assets/images/bg-adm.jpg')}) no-repeat 0,
		0 #0b2370;
	background-blend-mode: multiply;
	background-attachment: fixed, scroll;
	background-repeat: no-repeat;
	min-height: 100vh;
	opacity: 0.8;
	backdrop-filter: blur(3px);
	main {
		padding: 0 10rem;
		.box-log{
			padding-top: 3rem;
		}
		.box-admin{
			width: 100%;
			color:#fff;
			padding: 0 2rem 1rem;
			display: grid;
			grid-template-columns: 1fr 3fr 1fr;
			.searchbox{
				justify-content: center;
				display: flex;
				height: fit-content;
			}
		}	
	}
	
`
