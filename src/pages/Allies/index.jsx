import MenuHeader from 'components/MenuHeader'

import { AlieStyles } from './Alies.styles'
import { allies } from 'utils/allies'
const Alies = () => {
	return (
		<AlieStyles>
			<MenuHeader
				back
				TitleMenu={() => <h2 className='title-h'>NUESTROS ALIADOS</h2>}
			/>
			<div className='box-allies'>
				{allies.map((item) => (
					<div className='card-ally'>
						<div className='card-head'>
							<h3 className='title-ally'>{item.name}</h3>
							<p className='description-ally'>
								{item.description}
							</p>
						</div>
						<div className='logo-ally'>
							<img src={item.logo} alt='' />
						</div>
					</div>
				))}
			</div>
		</AlieStyles>
	)
}

export default Alies
