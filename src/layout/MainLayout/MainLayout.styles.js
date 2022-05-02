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
`
