import styled from 'styled-components'

export default styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 550px;
	width: 100%;
	//background-color: #683bb7;
	color: #fff;
	padding: 0 5rem;
	margin: 0 15px;

	transition: ${({ midItemIndex, idx }) =>
		midItemIndex === idx ? 'transform 700ms ease' : 'transform 300ms ease'};
	transform: ${({ midItemIndex, idx }) =>
		midItemIndex === idx ? 'scale(1.3)' : 'scale(1)'};

	> img {
		cursor: pointer;
		border-top-left-radius: ${({ midItemIndex, idx }) =>
			midItemIndex === idx ? '3vmin' : '4rem'};
		border-top-right-radius: ${({ midItemIndex, idx }) =>
			midItemIndex === idx ? '3vmin' : '4rem'};
		object-fit: cover;
		width: 100%;
		height: 320px;
	}
	.title {
		cursor: pointer;
		width: 100%;
		height: 10%;
		background: var(--primary);
		color: var(--white);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		transform: scale(1);
	}

	@media screen and (max-width: 767px) {
		padding: 0;
		margin: 5px;
		transform: scale(1);
		> img {
			border-radius: {
				border-radius: 4rem 4rem 0 0;
				height: 300px;
			}
		}
	}
`
