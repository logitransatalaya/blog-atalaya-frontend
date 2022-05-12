import styled from 'styled-components'

export const AlieStyles = styled.div`
	
	.box-allies {
		margin-top: 6rem;
		min-height: 40vh;
		background: #fff;
		border-radius: 3rem;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 2rem;

		.card-ally {
			margin: 1rem;
			padding: 2rem;
			display: flex;
			box-shadow: 0px 3px 6px #00000029;
			border: 1px solid #707070;
			border-radius: 18px;
			justify-content: space-between;
	
			.card-head{
				margin-right: 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.title-ally {
				font-size: 1.8rem;
				color: #0f216f;
				padding-bottom: 0.5rem;
			}
			.description-ally {
				font-size: 1.2rem;
				color: #707070;
			}
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
				max-width: 50px;
				&:hover {
					transform: scale(1.5);
				}
			}
		}
	}
	@media screen and (max-width: 700px) {
	}
`
