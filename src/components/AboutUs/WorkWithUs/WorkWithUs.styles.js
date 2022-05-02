import styled from 'styled-components'

export const WorkWithUStyles = styled.div`
	color: #fff;
	max-width: 940px;
	margin: auto;
	margin-top: 8rem;
	padding: 2rem;
	> h3 {
		padding-left: 3rem;
		cursor: pointer;
	}
	h1 {
		color: #0f216f;
		padding-bottom: 3rem;
	}
	p {
		color: #707070;
		font-size: 1.6rem;
	}
	.box-btn {
		padding-top: 4rem;
		text-align: center;
		> button {
			border-radius: 15px;
			background-color: #0f216f;
			color: #fff;
			padding: 1rem 4rem;
			font-size: 2rem;
			transition: background-color 0.5s linear;
			&:hover {
				background-color: #e55c1e;
				cursor: pointer;
			}
		}
	}
	.box {
		color: #000;
		background: #fff;
		width: 100%;
		padding: 6rem;
		border: 1px solid #707070;
		border-radius: 30px;
		> p {
			font-size: 1.6rem;
		}
	}
`
