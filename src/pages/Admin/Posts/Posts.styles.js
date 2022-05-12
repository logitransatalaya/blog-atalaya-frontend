import styled from 'styled-components'

export const PostStyles = styled.div`
	background: #fff;
	padding: 4rem 12rem;
	border-radius: 1.5rem 1.5rem 0 0;
	position: relative;
	.container-posts {
		width: 100%;
		margin-top: 4rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
	
		max-height: 50vh;
		overflow-y: scroll;
		position: relative;
	}
	.add-post {
		position: absolute;
		background:#0B2370 ;
		right: 60px;
		top: 380px;
		padding: .5rem;
		border: 3px solid #FFFFFF;
		border-radius: 10px;
		&:hover{
			background: #E55C1E;
		}
	}

	@media screen and (max-width: 767px) {
	}
`

export const CardPostStyles = styled.div`
	background: #fff;
	margin: 1rem;
	border: 2px solid #acacac;
	border-radius: 1.5rem;
	padding: 1rem;
	cursor: pointer;
	&:hover {
		background: #BCB8F5 ;
box-shadow: 0px 0px 6px #BCB8F58F;
border: 2px solid #BCB8F5;
border-radius: 19px;
	}
	.card-footer {
		padding-top: 1rem;
		display: flex;
		gap: 3rem;
	}
	.inview-block{
		height: 400px;
	}
	@media screen and (max-width: 767px) {
	}
`
