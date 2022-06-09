import styled from 'styled-components'

export const CardNewStyles = styled.div`
	/*box-shadow: 0px 3px 6px #00000029;
	border: 1px solid #707070;
	border-radius: 18px;
	margin: 2rem 0;
	padding: 2rem;
	cursor: pointer;
	.title {
		color: var(--sky);
		padding: 0.5rem 0;
	}
	p {
		color: var(--secondary-gray);
		font-size: 1.6rem;
	} */
	max-width: 50rem;
	margin: 0 auto;
	padding-bottom: 1rem;
	overflow: hidden;
	cursor: pointer;
	transition: 0.2s;

	&:hover {
		transform: translateY(-0.5%);
	}
	.card-media {
		img {
			display: block;
			width: 100%;
			height: 18rem;
			object-fit: cover;
		}
	}
	.card-content {
		margin-top: 1.5rem;
		.title {
			color: var(--sky);
		}
	}
	.card-text {
		line-height: 1.4;
		color: #3d3d3d;
		padding-top: 1.5rem;
		font-size: 1.4rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
	}
	.card-actions {
		padding-top: 1.5rem;
		a {
			color: var(--sky);
			background-color: white;
			font-weight: 700;
			text-decoration: none;
			outline: none;
			border: 1px solid var(--sky);
			padding: 3px 10px;
			border-radius: 5px;
			font-size: 1.6rem;
			cursor: pointer;
		}
	}
`