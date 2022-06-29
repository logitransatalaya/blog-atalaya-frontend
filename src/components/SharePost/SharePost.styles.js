import styled from 'styled-components'

export const SharePostStyles = styled.div`
	color: #fff;
	max-width: 75rem;
	width: calc(100% - 100px);
	margin: auto;
	margin-top: 6rem;
	> h4 {
		position: relative;
		cursor: pointer;
		margin-bottom: 1rem;
		left: -4rem;
	}
	.box {
		color: #000;
		background: #fff;
		width: 100%;
		padding: 4rem 5rem 5rem;
		border: 1px solid #707070;
		border-radius: 30px;
		> p {
			color: #707070;
			font-size: 1.5rem;
		}
	}
	.title-share {
		color: #0f216f;
	}
	.share-link {
		display: flex;
		margin-top: 3rem;
		.field {
			width: 100%;
			border: 1px solid #707070;
			border-radius: 15px;
			padding: 1.5rem 3rem;
			margin: 1rem;
			margin-left: 0;
			background: #fff;
			color: #0f216f;
			font-size: 1.6rem;
		}
		.btn {
			margin: 1rem;
			background: #ffffff;
			border: 1px solid #707070;
			border-radius: 15px;
			padding: 1.5rem 3rem;
			font-size: 1.6rem;
			color: #0f216f;
			transition: all 0.2s;
			&:hover {
				background: #0f216f;
				cursor: pointer;
				color: #fff;
			}
		}
	}
	@media screen and (max-width: 700px) {
		margin-top: 2rem;
		padding: 1rem;
		width: 100%;
		> h4 {
			left: 0;
			margin-bottom: 0;
			font-size: 1.2rem;
		}
		.box {
			padding: 3rem 3rem 2rem;
		}
		.title-share {
			font-size: 1.6rem;
		}
		.share-link {
			flex-direction: column;

			.btn {
				background: #0f216f;
				color: #fff;
				margin-left: 0;
				width: 100%;
			}
		}
	}
`
