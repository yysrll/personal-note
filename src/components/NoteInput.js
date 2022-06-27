import React from "react";

class NoteInput extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        }

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
    }

    onTitleChange(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        })
    }

    onBodyChange(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <div className="mb-3">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Enter your note here..." value={this.state.title} onChange={this.onTitleChange} />
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <textarea 
                        className="form-control" 
                        rows={4} 
                        placeholder="Enter your description here..."
                        value={this.state.body}
                        onChange={this.onBodyChange}
                />
                </div>
                <button className="btn btn-primary" type="submit">ADD</button>
            </form>
        )   
    }
}

export default NoteInput;