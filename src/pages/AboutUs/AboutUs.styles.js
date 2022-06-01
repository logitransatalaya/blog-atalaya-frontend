import styled from 'styled-components'

export const AboutUsStyles = styled.div`
	width: 100%;
	.wrapper {
		margin: auto;
		padding: 0 5rem ;
		display: flex;
		margin-top: 2rem;
		justify-content: space-around;
		align-items: center;
		height: 70vh;
	}

	.card {
		border-radius: 4rem 4rem 0 0;
		width: 25%;
		height: 30rem;
		background: white;
		position: relative;
		transition: 0.4s ease-out;
		box-shadow: 0px 7px 10px rgba(black, 0.5);
		cursor: pointer;
		&:hover {
			&:before {
				opacity: 1;
			}
			.card-poster {
				opacity: 1;
				transform: translateY(0px);
			}
		}
		&:before {
			border-radius: 4rem 4rem 0 0;
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			display: block;
			width: 100%;
			height: 100%;

			background: rgba(black, 0.6);
			z-index: 2;
			transition: 0.5s;
			opacity: 0;
		}
		> img {
			border-radius: 4rem 4rem 0 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
			top: 0;
			left: 0;
		}
		.card-poster {
			border-radius: 4rem 4rem 0 0;
			width: 100%;
			height: 100%;
			position: relative;
			z-index: 3;
			color: white;
			opacity: 0;
			transform: translateY(60px);
			transition: 0.5s;
			background: transparent
				linear-gradient(180deg, #0f216f4d 0%, #0f216f 100%);
		}
	}
	.title {
		position: relative;
		width: 100%;
		height: 13%;
		background: var(--primary);
		color: var(--white);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		z-index: 30;
	}
	.title-h {
		visibility: ${({ seeTitle }) => (seeTitle ? 'hidden' : 'visible')};
	}

	@media screen and (max-width: 700px) {
		.wrapper {
			padding: 0;
			flex-direction: column;
		}
	}

`

