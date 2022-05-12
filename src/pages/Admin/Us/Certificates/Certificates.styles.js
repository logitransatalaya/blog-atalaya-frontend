import styled from 'styled-components'

export const CertificatesStyles = styled.div`
	background: #fff;
	padding: 4rem 12rem;
	border-radius: 1.5rem 1.5rem 0 0;
	min-height: 80vh;
	position: relative;
	>h4{
		margin-top: 4rem;
		padding-left: 1rem;
		color: #0B2370;
	}
	.container-certificates {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-height: 50vh;
		overflow-y: scroll;
		position: relative;
	}
	.add-certificate {
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

export const CardCertificatesStyles = styled.div`
	background: #fff;
	margin: 1rem;
	border: 2px solid #acacac;
	border-radius: 1.5rem;
	padding: 1rem;

	.card-footer {
		padding-top: 1rem;
		display: flex;
		gap: 3rem;
	}
	@media screen and (max-width: 767px) {
	}
`
