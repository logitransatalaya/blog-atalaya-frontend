import styled from 'styled-components'

export const MenuHeaderStyles = styled.div`

	.menu-header {
		display: grid;
		//grid-template-columns: 640px 640px 1fr;
		grid-template-columns: 2fr 2fr 1fr;
	}

	.header-title {
		color: #fff;
		padding-left: 2rem;
		h2 {
			font-size: 2rem;
			font-weight: bold;
		}
		p {
			font-size: 1.2rem;
			font-style: italic;
		}
	}

	.header-action {
		align-items: center;
		display: flex;
		color: #fff;
		font-size: 2rem;
		span {
			margin-right: 2rem;
		}
		img {
			cursor: pointer;
			width: 2.2rem;
		}
	}
`
