import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardSearchStyles = styled(Link)`
	background-color: #fff;
	box-shadow: 0px 3px 6px #00000029;
	border: 1px solid #707070;
	border-radius: 18px;
	margin: 1rem 0;
	position: relative;
	padding: 2rem;
	text-decoration: none;
	display: block;

	.title {
		color: var(--sky);
	}
	p {
		padding-top: 0.5rem;
		font-size: 1.2rem;
		color: var(--secondary-gray);
	}
`
