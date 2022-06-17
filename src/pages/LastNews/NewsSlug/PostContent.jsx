import styled from 'styled-components'

const PostContent = ({ className, post }) => (
	<div className={className} dangerouslySetInnerHTML={{ __html: post }}></div>
)

const StyledPostContent = styled(PostContent)`
	max-width: 100% !important;
	position: relative;
	display: grid;
	h1,
	h2 {
		color: var(--sky);
		span {
			color: var(--sky) !important;
		}
	}
	img {
		max-width: 100%;
		object-fit: contain;
		height: auto !important;
	}
	@media screen and (max-width: 767px) {
		h1,
		h2 {
			color: var(--sky);
			span {
				font-size: 1.7rem;
				color: var(--sky);
			}
		}
		p {
			span {
				font-size: 1.3rem !important;
			}
		}

		img {
			max-height: 99% !important;
		}
	}
`

export { StyledPostContent }
