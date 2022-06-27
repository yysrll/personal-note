import React from "react";
import NoteCardList from "./components/NoteCardList";
import NoteInput from "./components/NoteInput";
import { getInitialData } from './utils/data';

class MyApp extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            notes: getInitialData()
        }

        this.onAddNotehandler = this.onAddNotehandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    }

    onAddNotehandler({ title, body }) {
        this.setState((prevState) => {
            return {
                ...prevState,
                notes: [{
                    id: +new Date(),
                    title,
                    body,
                    createdAt: Date.now(),
                    archived: false,
                },
                ...prevState.notes
            ]
            }
        })
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveNoteHandler(id) {
        const notes = this.state.notes.map(note => {
            if (note.id === id) {
                return {
                    ...note,
                    archived: !note.archived
                }
            }
            return note;
        })
        this.setState({ notes });
    }

    render() {
        return (
        <div className="container mt-5">
            <h1 className="mb-3">WELCOME TO MY NOTE</h1>
            <div className="row">
                <div className="col-8">
                    {
                        this.state.notes.length > 0 ?
                        <NoteCardList 
                            notes={this.state.notes} 
                            onDelete={this.onDeleteNoteHandler}
                            onArchive={this.onArchiveNoteHandler}
                        /> :
                        <div className="text-center">
                            <h3 className="bg-danger text-white">No notes yet</h3>
                        </div>
                    }
                    
                </div>
                <div className="col-4 p-4">
                    <NoteInput addNote={this.onAddNotehandler}/>
                </div>
            </div>
        </div>
        )
    }
}

export default MyApp;