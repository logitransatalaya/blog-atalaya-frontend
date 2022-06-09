import styled from 'styled-components'

export const ItemStyles = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	color: #fff;
	margin: 0 2rem;

	transition: ${({ midItemIndex, idx }) =>
		midItemIndex === idx ? 'transform 700ms ease' : 'transform 300ms ease'};
	transform: ${({ midItemIndex, idx }) =>
		midItemIndex === idx ? 'scale(1)' : 'scale(.8)'};
	.img-item {
		height: 35rem;
		cursor: pointer;
		width: 100%;
		background: transparent;
		border: none;
		> img {
			cursor: pointer;
			border-top-left-radius: 4rem;
			border-top-right-radius: 4vmin;
			object-fit: cover;
			width: 100%;
			height: 100%;
			max-height: 100%;
		}
	}
	.title {
		cursor: pointer;
		width: 100%;
		padding: 1.5rem;
		background: var(--primary);
		color: var(--white);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	@media screen and (max-width: 767px) {
		padding: 1rem;
		margin: 0;
		margin-top: 2rem;

		transform: scale(1);
		transition: all 2s;
		border-radius: 20px 20px 0 0;
		.img-item {
			border-radius: 20px 20px 0 0;
			height: 28rem;
			> img {
				border-radius: 20px 20px 0 0;
			}
		}
		.title {
			padding: 1rem;
			h3 {
				font-size: 1.4rem;
			}
		}
	}
`
