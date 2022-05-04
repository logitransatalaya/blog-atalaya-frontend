import styled from 'styled-components'

export const AlliesStyles = styled.div`
	background:#fff;
	padding: 4rem 12rem;
	border-radius:  1.5rem  1.5rem 0 0;
	min-height: 80vh;
	.container-allies{
		width: 100%;
		margin-top: 4rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-height: 50vh;
		overflow-y: scroll;
		position: relative;
	
	}
	.add-ally {
			position: fixed;
			right: 6rem;
			bottom:6rem;
		}
	@media screen and (max-width: 767px) {
	
	}
`

export const CardAllyStyles = styled.div`
	background:#fff;
	margin: 1rem;
	border: 2px solid #ACACAC;
border-radius: 1.5rem;
padding: 1rem;

.card-footer{
	padding-top: 1rem;
	display: flex;
	gap: 3rem;
}
	@media screen and (max-width: 767px) {
	
	}
`
