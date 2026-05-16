import { Component } from "react";
import { nanoid } from "nanoid";
import './TaskList.css'

class TaskList extends Component {
    state = {
        inputUrl: "",
        tasks: [
            {
            id: 0, 
            img: 'https://i.pinimg.com/736x/c0/8f/d8/c08fd819091cc1914a8fbff830c746d7.jpg',
            }, 
            {
            id: 1, 
            img: 'https://i.pinimg.com/736x/48/81/3a/48813a6550cc5fd0254ba6c61f2a80f3.jpg',
            }, 
            {
            id: 2, 
            img: 'https://i.pinimg.com/736x/f3/d0/c1/f3d0c1a6cbbb7e023d131987b177e6e4.jpg'
            },
            {
            id: 3, 
            img: 'https://i1-c.pinimg.com/736x/70/4c/ac/704cac241c6ab84d1fce9e4a76e00226.jpg'
            },
            {
            id: 4, 
            img: 'https://i1-c.pinimg.com/736x/d0/2b/35/d02b350bcc875cea28cf9e8379cd34b2.jpg'
            },
            {
            id: 5, 
            img: 'https://i.pinimg.com/736x/b0/59/4e/b0594e728183eadcaaf6c0fc85030326.jpg'
            }
        ],
    }

    hendleRemove = (taskId) => {
        this.setState({
            tasks: this.state.tasks.filter(({id}) => {
                return id !== taskId
            })
        })
    }

    handleInp = (event) => {
        this.setState({
            inputUrl: event.target.value
        })
    }

    handleAdd = () => {
        if (this.state.inputUrl === "") {
            return
        } else {
            const nevTask = {
                id: nanoid(),
                img: this.state.inputUrl
            }
            this.setState({
                tasks: [...this.state.tasks, nevTask]
            })
        }
    }

  render() {

    return (
        <>
            <div className="input-container">
                <input type="url" value={this.state.inputUrl} onChange={this.handleInp} className="task-input" />
                <button type="button" onClick={this.handleAdd} className="add-button">add image</button>
            </div>
            
            <ul className="task-list">
                {this.state.tasks.map(({id, img}) => (
                    <li key={id} className="task-item">
                        <img className="task-image" src={img} alt="Task" />
                        <button className="remove-button" type="button" onClick={() => this.hendleRemove(id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    )
  }
}

export default TaskList