import { keyframes } from 'styled-components';

const fadein = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`

const fadein2 = keyframes`
	0%, 67% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`

const fadein3 = keyframes`
	0%, 67% {
		opacity: 0;
	}

	100% {
		opacity: 0.05;
	}
`

const expand = keyframes`
	0%, 80% {
		margin: 0 0.5vw;
	}

	100% {
		margin: 0 1.5vw;
	}
`

const typing = keyframes`
  0% {
		width: 0
	}

	25% {
		width: 28vmin
	}

	55% {
		width: 28vmin
	}

  100% {
		width: 90vmin;
	}
`

/* The typewriter cursor effect */
const blink_caret = keyframes`
  from, to { border-right: solid; border-color: transparent;  }
  50% { border-right: solid; border-color: orange; }
`

const glow = keyframes`
	0%, 100% {
		opacity: 0
	}

	50% {
		opacity: 0.4
	}
`

export { fadein, fadein2, expand, glow, typing, blink_caret }
