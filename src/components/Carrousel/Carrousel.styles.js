import styled from 'styled-components'

export const CarrouselStyles = styled.main`
	width: 90%;
	max-width: 1300px;
	margin: auto;
	margin-top: 5rem;
	height: 55vh;

	.swiper {
		padding: 0 24px;
		box-sizing: border-box;
		height: 100%;
		border: none;
		border-radius: 10% 10% 0 0;
	}
	.navigation {
		text-decoration: none;
	}
	.swiper-slide {
		position: relative;
		padding: 24px;
		height: 100%;

		.card__img-wrapper {
			position: relative;
			top: 0;
			left: 0;
			right: 0;
			border: solid 1px #000;
			z-index: initial;
			overflow: hidden;
			position: relative;
			transform: scale(0.85);
			transition: 0.75s all ease-out;
			height: 100%;
			border: none;
			border-radius: 10% 10% 0 0;
			.card__img {
				border: none;
				width: 100%;
				object-fit: cover;
				height: 85%;
				display: block;
				width: calc(100% * 2);
				position: relative;
			}
			.img {
				transform: translateX(-26%) translateZ(0px);
			}
			.card__title {
				cursor: pointer;
				width: 100%;
				padding: 1rem;
				background: var(--primary);
				color: var(--white);
				display: flex;
				justify-content: center;
				font-size: 20px;
				text-align: center;
			}
		}
	}
	.swiper-slide-active {
		.card__img-wrapper {
			transform: scale(1);
		}
	}
	@media screen and (max-width: 1240px) {
		width: 100%;
	}

	@media screen and (max-width: 700px) {
		height: 400px;
		margin-top: 2.5rem;
		.swiper {
			padding: 0 30px;
		}

		.swiper-slide {
			position: relative;
			padding: 24px;
			height: 100%;

			.card__img-wrapper {
				.card__img {
					height: 80%;
				}
				.card__title {
					font-size: 14px;
				}
			}
		}
	}
`
