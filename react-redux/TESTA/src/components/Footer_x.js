import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component{
    render(){
        return(
            <p>
                show:
                {' '}
                {this.renderFilter('SHOW_ALL','All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED','Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE','Active')}
                .
            </p>
        )
    }
    renderFilter(filter,name){
        if(filter === this.props.filter){
            return name;
        }
        return (
            <a href='#' onClick= {e => {
            e.preventDefault();
            this.props.onFilterChange(filter)
        }}>
        {name}
        </a>
        )
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

export default Footer;