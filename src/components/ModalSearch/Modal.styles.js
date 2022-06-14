import styled from 'styled-components'
import { motion } from 'framer-motion'
export const ModalStyles = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	background-color: rgba(2, 6, 26, 0.96);
	width: 100%;
	.modal-dialog {
		width: 100%;
		height: 100vh;
		padding-top: 3rem;
		position: relative;
		overflow: auto;
		overflow-x: hidden;
	}
	.contact {
		padding: 0 0 2rem 6rem;
	}
	.container-search {
		margin: auto;
		margin-top: -0.2rem;
		padding-left: 6rem;
		display: flex;
		justify-content: center;
		max-width: 83rem;
		align-items: center;
		width: 100%;

		span {
			margin-left: 4rem;
			cursor: pointer;
			img {
				width: 20px;
			}
		}
	}

	.container-results {
		min-height: 37.5vh;
		margin: auto;
		max-width: 75rem;
		margin-top: 6rem;
	}

	@media screen and (max-width: 767px) {
		.container-search {
			margin: auto;
			padding: 2rem;
			width: 100%;
			overflow: hidden;
			margin-top: -0.2rem;
		}
		.container-results {
			min-height: 42vh;
			margin: 1rem;
		}
		.close {
			position: absolute;
			top: 4rem;
			right: 4rem;
			z-index: 100;
			cursor: pointer;
			img {
				width: 1.5rem;
			}
		}
		.contact {
			padding-left: 1rem;
		}
	}
`
