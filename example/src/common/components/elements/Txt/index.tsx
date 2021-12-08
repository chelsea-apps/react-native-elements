import React from 'react';
import TxtElement, {
	TxtProps as TxtElementProps,
} from '../../../../../lib/Txt';

const Txt = ({ ...props }: TxtElementProps) => <TxtElement {...props} />;

export default Txt;
