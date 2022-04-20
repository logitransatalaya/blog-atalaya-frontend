import styled from 'styled-components'

export const HomeStyles = styled.main`
	width: 100%;
	height: 90vh;
	.searchbox {
		margin: auto;

		display: flex;
		justify-content: center;
	}
	.social-media {
		position: relative;
		display: flex;
		margin: 2rem 8rem;
		span {
			margin: 0 1rem;
			cursor: pointer;
		}
	}
	@media screen and (max-width: 700px) {
		.searchbox {
			margin: 2rem;
		}
	}
`
