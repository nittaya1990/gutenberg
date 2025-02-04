/**
 * WordPress dependencies
 */
import { getBlockTypes } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useHasBorderPanel } from './border-panel';
import { useHasColorPanel } from './color-utils';
import { useHasDimensionsPanel } from './dimensions-panel';
import { useHasTypographyPanel } from './typography-panel';
import ScreenHeader from './header';
import NavigationButton from './navigation-button';

function BlockMenuItem( { block } ) {
	const hasTypographyPanel = useHasTypographyPanel( block.name );
	const hasColorPanel = useHasColorPanel( block.name );
	const hasBorderPanel = useHasBorderPanel( block.name );
	const hasDimensionsPanel = useHasDimensionsPanel( block.name );
	const hasLayoutPanel = hasBorderPanel || hasDimensionsPanel;
	const hasBlockMenuItem =
		hasTypographyPanel || hasColorPanel || hasLayoutPanel;

	if ( ! hasBlockMenuItem ) {
		return null;
	}

	return (
		<NavigationButton path={ '/blocks/' + block.name }>
			{ block.title }
		</NavigationButton>
	);
}

function ScreenBlockList() {
	return (
		<>
			<ScreenHeader
				back="/"
				title={ __( 'Blocks' ) }
				description={ __(
					'Customize the appearance of specific blocks and for the whole site.'
				) }
			/>
			{ getBlockTypes().map( ( block ) => (
				<BlockMenuItem
					block={ block }
					key={ 'menu-itemblock-' + block.name }
				/>
			) ) }
		</>
	);
}

export default ScreenBlockList;
