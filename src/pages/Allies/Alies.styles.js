import styled from 'styled-components'

export const AlieStyles = styled.div`
	padding-top: 1rem;
	.box-allies {
		margin-top: 7rem;
		min-height: 40vh;
		background: #fff;
		border-radius: 3rem;
		padding: 3rem;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;

		.card-ally {
			margin: 1rem;
			gap: 10rem;
			padding: 3rem;
			width: fit-content;
			height: 139px;
			display: flex;
			box-shadow: 0px 3px 6px #00000029;
			border: 1px solid #707070;
			border-radius: 18px;
			justify-content: space-between;

			.title-ally {
				font-size: 24px;
				color: #0f216f;
			}
			.description-ally {
				padding-top: 1rem;
				font-size: 1.5rem;
				color: #707070;
			}
		}
		.logo-ally {
			box-shadow: 0px 3px 6px #00000029;
			border: 1px solid #707070;
			max-width: 90px;
			border-radius: 50%;
			padding: 0.5rem;
			overflow: hidden;
			> img {
				transition: transform 0.2s;
				width: 100%;
				height: 100%;
				&:hover {
					transform: scale(1.5);
				}
			}
		}
	}
	@media screen and (max-width: 700px) {
	}
`
