
import React, { useEffect, useState } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import {AlliFormStyles} from './AlliForm.styles'

export default function AlliForm() {
	
	return (
		<AlliFormStyles>
				
				<LandscapeMenu active={3}/>
				<div className='container-frm-alli'>
					<div className='hedader-frm-alli'>
						<h3>Nuevo aliado</h3>
						<div>
						<button>Guardar</button>
						<button>Eliminar</button>
						</div>
					</div>
					<div className='frm-ally'>

							<p>Aliado:</p>
							<div>
							<input type="text" />
							</div>

							<p>Url:</p>
							<div>
							<input type="text" />
							</div>

							<p>Image:</p>
							<div className='box-file'>
								<p>logo-atalaya.png</p>
							<input type="file" />
							</div>

							<p>Descripción:</p>
							<div>
							<textarea >

							</textarea>
							</div>
					</div>
						
				</div>

		</AlliFormStyles>
		
			
		
	)
}
