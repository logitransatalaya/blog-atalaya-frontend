import styled from 'styled-components'

export const PostStyles = styled.div`
	background: #fff;
	padding: 4rem 12rem;
	border-radius: 1.5rem 1.5rem 0 0;
	.container-posts {
		width: 100%;
		margin-top: 4rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-height: 50vh;
		overflow-y: scroll;
		position: relative;
	}
	.add-post {
		position: fixed;
		right: 6rem;
		bottom: 6rem;
		font-size: 4rem;
		background: #fff;
	}
	@media screen and (max-width: 767px) {
	}
`

export const CardPostStyles = styled.div`
	background: #fff;
	margin: 1rem;
	border: 2px solid #acacac;
	border-radius: 1.5rem;
	padding: 1rem;

	.card-footer {
		padding-top: 1rem;
		display: flex;
		gap: 3rem;
	}
	@media screen and (max-width: 767px) {
	}
`
