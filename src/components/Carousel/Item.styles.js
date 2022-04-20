import styled from 'styled-components'

export const ItemStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	height: 250px;
	width: 100%;
	color: #fff;
	margin: 15px;
	font-size: 0.5em;
	transition: ${({ midItemIndex, idx }) =>
		midItemIndex === idx ? 'height 700ms ease' : 'transform 300ms ease'};

	height: ${({ midItemIndex, idx }) =>
		midItemIndex === idx ? '500px' : '100%'};
	.row {
		background: blue;
	}
	.card-box {
		display: flex;
		flex-direction: column;

		background: blue;

		> img {
			height: 100%;

			border-radius: 4rem 4rem 0 0;
			width: 100%;
		}

		.title {
			width: 100%;
			height: 13%;
			background: var(--primary);
			color: var(--white);
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
	}
`
