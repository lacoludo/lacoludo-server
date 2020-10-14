import { createGlobalStyle } from 'styled-components'

const TippyStyle = createGlobalStyle`
	.tippy-touch {
		cursor: pointer !important;
	}
	.tippy-notransition {
		transition: none !important;
	}
	.tippy-popper {
		max-width: 400px;
		perspective: 800px;
		z-index: 9999;
		outline: 0;
		transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
		pointer-events: none;
	}
	.tippy-popper.html-template {
		max-width: 96%;
		max-width: calc(100% - 20px);
	}
	.tippy-popper[x-placement^='top'] [x-arrow] {
		border-top: 7px solid #333;
		border-right: 7px solid transparent;
		border-left: 7px solid transparent;
		bottom: -7px;
		margin: 0 9px;
	}
	.tippy-popper[x-placement^='top'] [x-arrow].arrow-small {
		border-top: 5px solid #333;
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
		bottom: -5px;
	}
	.tippy-popper[x-placement^='top'] [x-arrow].arrow-big {
		border-top: 10px solid #333;
		border-right: 10px solid transparent;
		border-left: 10px solid transparent;
		bottom: -10px;
	}
	.tippy-popper[x-placement^='top'] [x-circle] {
		transform-origin: 0 33%;
	}
	.tippy-popper[x-placement^='top'] [x-circle].enter {
		transform: scale(1) translate(-50%, -55%);
		opacity: 1;
	}
	.tippy-popper[x-placement^='top'] [x-circle].leave {
		transform: scale(0.15) translate(-50%, -50%);
		opacity: 0;
	}
	.tippy-popper[x-placement^='top'] .tippy-tooltip.light-theme [x-circle] {
		background-color: #fff;
	}
	.tippy-popper[x-placement^='top'] .tippy-tooltip.light-theme [x-arrow] {
		border-top: 7px solid #fff;
		border-right: 7px solid transparent;
		border-left: 7px solid transparent;
	}
	.tippy-popper[x-placement^='top']
		.tippy-tooltip.light-theme
		[x-arrow].arrow-small {
		border-top: 5px solid #fff;
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
	}
	.tippy-popper[x-placement^='top']
		.tippy-tooltip.light-theme
		[x-arrow].arrow-big {
		border-top: 10px solid #fff;
		border-right: 10px solid transparent;
		border-left: 10px solid transparent;
	}
	.tippy-popper[x-placement^='top'] .tippy-tooltip.transparent-theme [x-circle] {
		background-color: rgba(0, 0, 0, 0.7);
	}
	.tippy-popper[x-placement^='top'] .tippy-tooltip.transparent-theme [x-arrow] {
		border-top: 7px solid rgba(0, 0, 0, 0.7);
		border-right: 7px solid transparent;
		border-left: 7px solid transparent;
	}
	.tippy-popper[x-placement^='top']
		.tippy-tooltip.transparent-theme
		[x-arrow].arrow-small {
		border-top: 5px solid rgba(0, 0, 0, 0.7);
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
	}
	.tippy-popper[x-placement^='top']
		.tippy-tooltip.transparent-theme
		[x-arrow].arrow-big {
		border-top: 10px solid rgba(0, 0, 0, 0.7);
		border-right: 10px solid transparent;
		border-left: 10px solid transparent;
	}
	.tippy-popper[x-placement^='top'] [data-animation='perspective'] {
		transform-origin: bottom;
	}
	.tippy-popper[x-placement^='top'] [data-animation='perspective'].enter {
		opacity: 1;
		transform: translateY(-10px) rotateX(0);
	}
	.tippy-popper[x-placement^='top'] [data-animation='perspective'].leave {
		opacity: 0;
		transform: translateY(0) rotateX(90deg);
	}
	.tippy-popper[x-placement^='top'] [data-animation='fade'].enter {
		opacity: 1;
		transform: translateY(-10px);
	}
	.tippy-popper[x-placement^='top'] [data-animation='fade'].leave {
		opacity: 0;
		transform: translateY(-10px);
	}
	.tippy-popper[x-placement^='top'] [data-animation='shift'].enter {
		opacity: 1;
		transform: translateY(-10px);
	}
	.tippy-popper[x-placement^='top'] [data-animation='shift'].leave {
		opacity: 0;
		transform: translateY(0);
	}
	.tippy-popper[x-placement^='top'] [data-animation='scale'].enter {
		opacity: 1;
		transform: translateY(-10px) scale(1);
	}
	.tippy-popper[x-placement^='top'] [data-animation='scale'].leave {
		opacity: 0;
		transform: translateY(0) scale(0);
	}
	.tippy-popper[x-placement^='bottom'] [x-arrow] {
		border-bottom: 7px solid #333;
		border-right: 7px solid transparent;
		border-left: 7px solid transparent;
		top: -7px;
		margin: 0 9px;
	}
	.tippy-popper[x-placement^='bottom'] [x-arrow].arrow-small {
		border-bottom: 5px solid #333;
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
		top: -5px;
	}
	.tippy-popper[x-placement^='bottom'] [x-arrow].arrow-big {
		border-bottom: 10px solid #333;
		border-right: 10px solid transparent;
		border-left: 10px solid transparent;
		top: -10px;
	}
	.tippy-popper[x-placement^='bottom'] [x-circle] {
		transform-origin: 0 -50%;
	}
	.tippy-popper[x-placement^='bottom'] [x-circle].enter {
		transform: scale(1) translate(-50%, -45%);
		opacity: 1;
	}
	.tippy-popper[x-placement^='bottom'] [x-circle].leave {
		transform: scale(0.15) translate(-50%, -5%);
		opacity: 0;
	}
	.tippy-popper[x-placement^='bottom'] .tippy-tooltip.light-theme [x-circle] {
		background-color: #fff;
	}
	.tippy-popper[x-placement^='bottom'] .tippy-tooltip.light-theme [x-arrow] {
		border-bottom: 7px solid #fff;
		border-right: 7px solid transparent;
		border-left: 7px solid transparent;
	}
	.tippy-popper[x-placement^='bottom']
		.tippy-tooltip.light-theme
		[x-arrow].arrow-small {
		border-bottom: 5px solid #fff;
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
	}
	.tippy-popper[x-placement^='bottom']
		.tippy-tooltip.light-theme
		[x-arrow].arrow-big {
		border-bottom: 10px solid #fff;
		border-right: 10px solid transparent;
		border-left: 10px solid transparent;
	}
	.tippy-popper[x-placement^='bottom']
		.tippy-tooltip.transparent-theme
		[x-circle] {
		background-color: rgba(0, 0, 0, 0.7);
	}
	.tippy-popper[x-placement^='bottom']
		.tippy-tooltip.transparent-theme
		[x-arrow] {
		border-bottom: 7px solid rgba(0, 0, 0, 0.7);
		border-right: 7px solid transparent;
		border-left: 7px solid transparent;
	}
	.tippy-popper[x-placement^='bottom']
		.tippy-tooltip.transparent-theme
		[x-arrow].arrow-small {
		border-bottom: 5px solid rgba(0, 0, 0, 0.7);
		border-right: 5px solid transparent;
		border-left: 5px solid transparent;
	}
	.tippy-popper[x-placement^='bottom']
		.tippy-tooltip.transparent-theme
		[x-arrow].arrow-big {
		border-bottom: 10px solid rgba(0, 0, 0, 0.7);
		border-right: 10px solid transparent;
		border-left: 10px solid transparent;
	}
	.tippy-popper[x-placement^='bottom'] [data-animation='perspective'] {
		transform-origin: top;
	}
	.tippy-popper[x-placement^='bottom'] [data-animation='perspective'].enter {
		opacity: 1;
		transform: translateY(10px) rotateX(0);
	}
	.tippy-popper[x-placement^='bottom'] [data-animation='perspective'].leave {
		opacity: 0;
		transform: translateY(0) rotateX(-90deg);
	}
	.tippy-popper[x-placement^='bottom'] [data-animation='fade'].enter {
		opacity: 1;
		transform: translateY(10px);
	}
	.tippy-popper[x-placement^='bottom'] [data-animation='fade'].leave {
		opacity: 0;
		transform: translateY(10px);
	}
	.tippy-popper[x-placement^='bottom'] [data-animation='shift'].enter {
		opacity: 1;
		transform: translateY(10px);
	}
	.tippy-popper[x-placement^='bottom'] [data-animation='shift'].leave {
		opacity: 0;
		transform: translateY(0);
	}
	.tippy-popper[x-placement^='bottom'] [data-animation='scale'].enter {
		opacity: 1;
		transform: translateY(10px) scale(1);
	}
	.tippy-popper[x-placement^='bottom'] [data-animation='scale'].leave {
		opacity: 0;
		transform: translateY(0) scale(0);
	}
	.tippy-popper[x-placement^='left'] [x-arrow] {
		border-left: 7px solid #333;
		border-top: 7px solid transparent;
		border-bottom: 7px solid transparent;
		right: -7px;
		margin: 6px 0;
	}
	.tippy-popper[x-placement^='left'] [x-arrow].arrow-small {
		border-left: 5px solid #333;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		right: -5px;
	}
	.tippy-popper[x-placement^='left'] [x-arrow].arrow-big {
		border-left: 10px solid #333;
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		right: -10px;
	}
	.tippy-popper[x-placement^='left'] [x-circle] {
		transform-origin: 50% 0;
	}
	.tippy-popper[x-placement^='left'] [x-circle].enter {
		transform: scale(1) translate(-50%, -50%);
		opacity: 1;
	}
	.tippy-popper[x-placement^='left'] [x-circle].leave {
		transform: scale(0.15) translate(-50%, -50%);
		opacity: 0;
	}
	.tippy-popper[x-placement^='left'] .tippy-tooltip.light-theme [x-circle] {
		background-color: #fff;
	}
	.tippy-popper[x-placement^='left'] .tippy-tooltip.light-theme [x-arrow] {
		border-left: 7px solid #fff;
		border-top: 7px solid transparent;
		border-bottom: 7px solid transparent;
	}
	.tippy-popper[x-placement^='left']
		.tippy-tooltip.light-theme
		[x-arrow].arrow-small {
		border-left: 5px solid #fff;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
	}
	.tippy-popper[x-placement^='left']
		.tippy-tooltip.light-theme
		[x-arrow].arrow-big {
		border-left: 10px solid #fff;
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
	}
	.tippy-popper[x-placement^='left'] .tippy-tooltip.transparent-theme [x-circle] {
		background-color: rgba(0, 0, 0, 0.7);
	}
	.tippy-popper[x-placement^='left'] .tippy-tooltip.transparent-theme [x-arrow] {
		border-left: 7px solid rgba(0, 0, 0, 0.7);
		border-top: 7px solid transparent;
		border-bottom: 7px solid transparent;
	}
	.tippy-popper[x-placement^='left']
		.tippy-tooltip.transparent-theme
		[x-arrow].arrow-small {
		border-left: 5px solid rgba(0, 0, 0, 0.7);
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
	}
	.tippy-popper[x-placement^='left']
		.tippy-tooltip.transparent-theme
		[x-arrow].arrow-big {
		border-left: 10px solid rgba(0, 0, 0, 0.7);
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
	}
	.tippy-popper[x-placement^='left'] [data-animation='perspective'] {
		transform-origin: right;
	}
	.tippy-popper[x-placement^='left'] [data-animation='perspective'].enter {
		opacity: 1;
		transform: translateX(-10px) rotateY(0);
	}
	.tippy-popper[x-placement^='left'] [data-animation='perspective'].leave {
		opacity: 0;
		transform: translateX(0) rotateY(-90deg);
	}
	.tippy-popper[x-placement^='left'] [data-animation='fade'].enter {
		opacity: 1;
		transform: translateX(-10px);
	}
	.tippy-popper[x-placement^='left'] [data-animation='fade'].leave {
		opacity: 0;
		transform: translateX(-10px);
	}
	.tippy-popper[x-placement^='left'] [data-animation='shift'].enter {
		opacity: 1;
		transform: translateX(-10px);
	}
	.tippy-popper[x-placement^='left'] [data-animation='shift'].leave {
		opacity: 0;
		transform: translateX(0);
	}
	.tippy-popper[x-placement^='left'] [data-animation='scale'].enter {
		opacity: 1;
		transform: translateX(-10px) scale(1);
	}
	.tippy-popper[x-placement^='left'] [data-animation='scale'].leave {
		opacity: 0;
		transform: translateX(0) scale(0);
	}
	.tippy-popper[x-placement^='right'] [x-arrow] {
		border-right: 7px solid #333;
		border-top: 7px solid transparent;
		border-bottom: 7px solid transparent;
		left: -7px;
		margin: 6px 0;
	}
	.tippy-popper[x-placement^='right'] [x-arrow].arrow-small {
		border-right: 5px solid #333;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		left: -5px;
	}
	.tippy-popper[x-placement^='right'] [x-arrow].arrow-big {
		border-right: 10px solid #333;
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		left: -10px;
	}
	.tippy-popper[x-placement^='right'] [x-circle] {
		transform-origin: -50% 0;
	}
	.tippy-popper[x-placement^='right'] [x-circle].enter {
		transform: scale(1) translate(-50%, -50%);
		opacity: 1;
	}
	.tippy-popper[x-placement^='right'] [x-circle].leave {
		transform: scale(0.15) translate(-50%, -50%);
		opacity: 0;
	}
	.tippy-popper[x-placement^='right'] .tippy-tooltip.light-theme [x-circle] {
		background-color: #fff;
	}
	.tippy-popper[x-placement^='right'] .tippy-tooltip.light-theme [x-arrow] {
		border-right: 7px solid #fff;
		border-top: 7px solid transparent;
		border-bottom: 7px solid transparent;
	}
	.tippy-popper[x-placement^='right']
		.tippy-tooltip.light-theme
		[x-arrow].arrow-small {
		border-right: 5px solid #fff;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
	}
	.tippy-popper[x-placement^='right']
		.tippy-tooltip.light-theme
		[x-arrow].arrow-big {
		border-right: 10px solid #fff;
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
	}
	.tippy-popper[x-placement^='right']
		.tippy-tooltip.transparent-theme
		[x-circle] {
		background-color: rgba(0, 0, 0, 0.7);
	}
	.tippy-popper[x-placement^='right'] .tippy-tooltip.transparent-theme [x-arrow] {
		border-right: 7px solid rgba(0, 0, 0, 0.7);
		border-top: 7px solid transparent;
		border-bottom: 7px solid transparent;
	}
	.tippy-popper[x-placement^='right']
		.tippy-tooltip.transparent-theme
		[x-arrow].arrow-small {
		border-right: 5px solid rgba(0, 0, 0, 0.7);
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
	}
	.tippy-popper[x-placement^='right']
		.tippy-tooltip.transparent-theme
		[x-arrow].arrow-big {
		border-right: 10px solid rgba(0, 0, 0, 0.7);
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
	}
	.tippy-popper[x-placement^='right'] [data-animation='perspective'] {
		transform-origin: left;
	}
	.tippy-popper[x-placement^='right'] [data-animation='perspective'].enter {
		opacity: 1;
		transform: translateX(10px) rotateY(0);
	}
	.tippy-popper[x-placement^='right'] [data-animation='perspective'].leave {
		opacity: 0;
		transform: translateX(0) rotateY(90deg);
	}
	.tippy-popper[x-placement^='right'] [data-animation='fade'].enter {
		opacity: 1;
		transform: translateX(10px);
	}
	.tippy-popper[x-placement^='right'] [data-animation='fade'].leave {
		opacity: 0;
		transform: translateX(10px);
	}
	.tippy-popper[x-placement^='right'] [data-animation='shift'].enter {
		opacity: 1;
		transform: translateX(10px);
	}
	.tippy-popper[x-placement^='right'] [data-animation='shift'].leave {
		opacity: 0;
		transform: translateX(0);
	}
	.tippy-popper[x-placement^='right'] [data-animation='scale'].enter {
		opacity: 1;
		transform: translateX(10px) scale(1);
	}
	.tippy-popper[x-placement^='right'] [data-animation='scale'].leave {
		opacity: 0;
		transform: translateX(0) scale(0);
	}
	.tippy-popper .tippy-tooltip.transparent-theme {
		background-color: rgba(0, 0, 0, 0.7);
	}
	.tippy-popper .tippy-tooltip.transparent-theme[data-animatefill] {
		background-color: transparent;
	}
	.tippy-popper .tippy-tooltip.light-theme {
		color: #26323d;
		box-shadow: 0 4px 20px 4px rgba(0, 20, 60, 0.1),
			0 4px 80px -8px rgba(0, 20, 60, 0.2);
		background-color: #fff;
	}
	.tippy-popper .tippy-tooltip.light-theme[data-animatefill] {
		background-color: transparent;
	}
	.tippy-tooltip {
		position: relative;
		color: #fff;
		border-radius: 4px;
		font-size: 0.95rem;
		padding: 0.4rem 0.8rem;
		text-align: center;
		will-change: transform;
		background-color: #333;
	}
	.tippy-tooltip--small {
		padding: 0.25rem 0.5rem;
		font-size: 0.8rem;
	}
	.tippy-tooltip--big {
		padding: 0.6rem 1.2rem;
		font-size: 1.2rem;
	}
	.tippy-tooltip[data-animatefill] {
		overflow: hidden;
		background-color: transparent;
	}
	.tippy-tooltip[data-interactive] {
		pointer-events: auto;
	}
	.tippy-tooltip[data-inertia] {
		transition-timing-function: cubic-bezier(0.53, 2, 0.36, 0.85);
	}
	.tippy-tooltip [x-arrow] {
		position: absolute;
		width: 0;
		height: 0;
	}
	.tippy-tooltip [x-circle] {
		position: absolute;
		will-change: transform;
		background-color: #333;
		border-radius: 50%;
		width: 130%;
		width: calc(110% + 2rem);
		left: 50%;
		top: 50%;
		z-index: -1;
		overflow: hidden;
		transition: all ease;
	}
	.tippy-tooltip [x-circle]:before {
		content: '';
		padding-top: 90%;
		float: left;
	}
	@media (max-width: 450px) {
		.tippy-popper {
			max-width: 96%;
			max-width: calc(100% - 20px);
		}
	}
`

export default TippyStyle
