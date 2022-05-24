import styled from 'styled-components'

export const HomeStyles = styled.main`
	width: 100%;
	.searchbox {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}
	.cont-carousel {
		min-height: 68vh;
		align-items: center;
		display: grid;
		max-width: 90%;
		margin: auto;
		
	}
	.social-media {
		position: relative;
		display: flex;
		margin: 0rem 8rem;
		top: -1rem;
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
