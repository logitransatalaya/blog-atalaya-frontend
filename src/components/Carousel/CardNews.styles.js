import styled from 'styled-components'

export const CardNewStyles = styled.div`
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
