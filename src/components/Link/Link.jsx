import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const RADIAN = Math.PI / 180;

const Link = ({route}) => {
    return (
        <li className='mr-8 px-6 hover:bg-yellow-600'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.proptypes = {
    route: PropTypes.object
}

export default Link;