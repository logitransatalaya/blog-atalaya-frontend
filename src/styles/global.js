import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
	lightGrey: '#ebebe9',
	gray: '#cbccd2',
	darkGray: '#4e5d5c',
	green: 'rgb(116, 197, 86)',
	lightGreen: 'rgba(105, 177, 127, 0.5)',
	blue: '#0f1e62',
	blueUpdate: '#3F84EE',
	lightBlue: 'rgba(63, 132, 238, 0.5)',
	red: '#ec1616',
	lightRed: 'rgba(236, 22, 22, 0.5)',
	white: '#ffff',
	whiteOpacity: '#f0f8ff45'
}

export const borderRadius = {
	br_5: '5px',
	br_10: '10px',
	br_20: '20px'
}

export const fontSize = {
	f_sm: '1.6rem',
	f_md: '1.8rem',
	f_bg: '2.4rem',
	f_xs: '2.6rem'
}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

`
