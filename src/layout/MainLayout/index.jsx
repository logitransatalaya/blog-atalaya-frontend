import Search from 'components/Search'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { LogoStyles } from 'styles/global'
import { MainLayoutStyles } from './MainLayout.styles'
import useAuth from 'hooks/useAuth'
import { Link } from 'react-router-dom'
// ===========================|| MAIN LAYOUT ||=========================== //
const MainLayout = ({ disabled }) => {
	const { user, logout } = useAuth()
	return (
		<MainLayoutStyles>
			{/* main content */}
			<main>
				{!disabled ? (
					<>
						<div className='box-log'>
							<Link to={'/admin/posts'}>
								<LogoStyles>
									<img
										src={
											require(`assets/images/logo-atalaya.svg`)
												.default
										}
									/>
								</LogoStyles>
							</Link>
						</div>
						<div className='box-admin'>
							<div>
								<h4>{user?.firstName}</h4>
								<div className='admin-action'>
									<Link to={'/admin/profile'}>Perfil</Link>
									<Link to={'/admin/create-account'}>
										Crear cuenta
									</Link>
									<Link onClick={logout} to={'login'}>
										Cerrar sesión
									</Link>
								</div>
							</div>
							<div className='searchbox'>
								<Search /*handleSearch={() => handleModal(true)}  */
								/>
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
