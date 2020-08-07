import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    render() {
        let classNames = "app-list-item d-flex justify-content-between";
        const {label, onDelete, onToggleImportant, onToggleLiked, important, liked} = this.props;

        if(important){
            classNames += " important";
        }

        if(liked){
            classNames += " like";
        }

        return (
            <div className={classNames}>
                <span onClick={onToggleLiked} className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={onToggleImportant} type="button" className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}