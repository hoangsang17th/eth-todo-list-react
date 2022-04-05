

//                 <div className='row  mx-3 mt-2'>
//                     <div className='col-10 '>
//                         <ul id="taskList" className="list-unstyled  justify-content-center">

//                             {this.state.tasks.map((task, key) => {
//                                 return (
//                                     <div className="taskTemplate" key={key}>
//                                         <label>
//                                             <input type="checkbox" className='form-check-input'
//                                                 name={task.id}
//                                                 defaultChecked={task.completed}
//                                                 ref={(input) => {
//                                                     this.checkbox = input
//                                                 }}
//                                                 onClick={(event) => {
//                                                     this.props.toggleCompleted(this.checkbox.name)
//                                                 }}
//                                             />
//                                             <span className="form-check-label text-center">{task.content}</span>
//                                         </label>
//                                     </div>
//                                 )
//                             })}
//                         </ul></div>
//                     <ul id="completedTaskList" className="list-unstyled">
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }

// export default TodoList;

import React, { Component } from 'react'

class TodoList extends Component {

    render() {
        return (
            <div id="content" className='col-12'>
                <form className='row' onSubmit={(event) => {
                    event.preventDefault()
                    this.props.createTask(this.task.value)
                }}><div className='col-9'>
                        <input
                            id="newTask"
                            ref={(input) => {
                                this.task = input
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Add task..."
                            required /></div>
                    <div className='col-3'>
                        <input type="submit" className='form-control btn btn-outline-primary' />
                    </div>
                </form>
                <ul id="taskList" className="list-unstyled">
                    {this.props.tasks.map((task, key) => {
                        return (
                            <div className="checkbox" key={key}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name={task.id}
                                        defaultChecked={task.completed}
                                        ref={(input) => {
                                            this.checkbox = input
                                        }}
                                        onClick={(event) => {
                                            this.props.toggleCompleted(this.checkbox.name)
                                        }} />
                                    <span className="content">{task.content}</span>
                                </label>
                            </div>
                        )
                    })}
                </ul>
                <ul id="completedTaskList" className="list-unstyled">
                </ul>
            </div>
        );
    }
}

export default TodoList;