import React,{Component} from 'react';
import AppHeader from '../app-header/'
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form';
import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[
                {label: "Going to learn React", important: true, liked: false, id:1},
                {label: "That is so good", important: false, liked: false, id:2},
                {label: "I need a break", important: false, liked: false, id:3}
            ]
        };
        this.maxId = 4;

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
    }

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }

    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newElem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newElem, ...data.slice(index + 1)];
            return {
                data: newArr,
            }
        });
    }

    onToggleLiked(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newElem = {...old, liked: !old.liked};
            const newArr = [...data.slice(0, index), newElem, ...data.slice(index + 1)];
            return {
                data: newArr,
            }
        });
    }

    addItem(body){
        this.setState(({data}) => {
            let newItem = {
                label: body,
                important: false,
                id: this.maxId++,
            };
            return {
                data: [...data, newItem],
            }
        })
    }

    render(){
        const data = this.state.data;
        const liked = data.filter(elem => elem.liked).length;
        const allPosts = data.length;

        return (
            <div className="app">
                <AppHeader liked={liked} allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}