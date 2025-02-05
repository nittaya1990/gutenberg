/**
 * WordPress dependencies
 */
import { SVG, Path, Circle } from '@wordpress/primitives';

const bellUnread = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path d="M13.969 4.39A5.088 5.088 0 0 0 12 4C9.2 4 7 6.2 7 9v2.5c0 1.353-.17 2.368-.976 3-.267.209-.602.376-1.024.5v1h14v-1c-.422-.124-.757-.291-1.024-.5-.806-.632-.976-1.647-.976-3V11c-.53 0-1.037-.103-1.5-.29v.79c0 .93.066 1.98.515 2.897l.053.103H7.932l.053-.103c.449-.917.515-1.967.515-2.897V9c0-1.972 1.528-3.5 3.5-3.5.43 0 .838.072 1.214.206.167-.488.425-.933.755-1.316Zm-3.961 13.618c0-.176.023-.346.065-.508h3.854A1.996 1.996 0 0 1 12 20a1.991 1.991 0 0 1-1.992-1.992Z" />
		<Circle cx="17" cy="7" r="2.5" />
	</SVG>
);

export default bellUnread;
