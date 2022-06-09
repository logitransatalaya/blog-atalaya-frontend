import styled from 'styled-components'

export const NewsSlugStyles = styled.div`
	.container-news-slug {
		background-color: var(--white);
		border-radius: 3rem;
		padding: 3rem 5rem;
		min-height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 5.15rem 0;
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	.news-slug {
		width: 80rem;
		margin: 2rem auto;
		position: relative;
		max-width: 100%;
	}
	.text-update {
		margin-top: 4rem;
		padding-right: 10px;
		text-align: end;
		color: #0f216f;
		font-style: italic;
		font-weight: 600;
		font-size: 1.6rem;
	}
	@media screen and (max-width: 767px) {
		margin: 0 1rem;
		.container-news-slug {
			padding: 1rem 2rem;
			margin: 5rem 0;
		}
		.text-update {
			font-size: 1.2rem;
		}
	}
`
