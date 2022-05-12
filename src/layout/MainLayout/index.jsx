import Search from 'components/Search'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { LogoStyles } from 'styles/global'
import { MainLayoutStyles } from './MainLayout.styles'
// ===========================|| MAIN LAYOUT ||=========================== //

const MainLayout = ({disabled}) => {
	return (
		<MainLayoutStyles>
			{/* main content */}
			<main>
				{!disabled ? (
					<>
					<div className='box-log'>
					<LogoStyles>
						<img
							src={
								require(`assets/images/logo-atalaya.svg`)
								.default
							}
							/>
					</LogoStyles>
					</div>
					<div className='box-admin'>
						<div>
							<h4>Administrador</h4>
							<p>Perfil</p>
							<p>Crear cuenta</p>
							<p>Cerrar sesión</p>
						</div>
						<div className='searchbox'>
							<Search /*handleSearch={() => handleModal(true)}  *//>
						</div>
					</div>
				</>
				) : null}
				<Outlet />
			</main>
		</MainLayoutStyles>
	)
}

export default MainLayout
