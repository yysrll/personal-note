import React from "react";
import FilterForm from "./components/FilterForm";
import NoteCardList from "./components/NoteCardList";
import NoteInput from "./components/NoteInput";
import { getInitialData } from './utils/data';

class MyApp extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            notes: getInitialData(),
            unfilteredNote: getInitialData()
        }

        this.onAddNotehandler = this.onAddNotehandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
        this.searchByTitle = this.searchByTitle.bind(this);
    }

    onAddNotehandler({ title, body }) {
        this.setState((prevState) => {
            return {
                ...prevState,
                unfilteredNote: [{
                    id: +new Date(),
                    title,
                    body,
                    createdAt: Date.now(),
                    archived: false,
                },
                ...prevState.unfilteredNote
                ],
                notes: [{
                    id: +new Date(),
                    title,
                    body,
                    createdAt: Date.now(),
                    archived: false,
                },
                ...prevState.unfilteredNote
                ],
            }
        })
    }

    onDeleteNoteHandler(id) {
        const unfilteredNote = this.state.unfilteredNote.filter(note => note.id !== id);
        this.setState({ 
            unfilteredNote: unfilteredNote,
            notes: unfilteredNote,
         });
    }

    onArchiveNoteHandler(id) {
        const notes = this.state.unfilteredNote.map(note => {
            if (note.id === id) {
                return {
                    ...note,
                    archived: !note.archived
                }
            }
            return note;
        })
        this.setState({ 
            unfilteredNote: notes,
            notes: notes,
        });
    }

    onSearchNoteHandler({ search, filter}) {
        const unfilteredNote = this.state.unfilteredNote;
        const notes = unfilteredNote.filter(note => {
            if (filter === "all") {
                return this.searchByTitle(note.title, search)
            } else if (filter === "archived") {
                return this.searchByTitle(note.title, search) && note.archived;
            } else {
                return this.searchByTitle(note.title, search) && !note.archived;
            }
        })
        console.log(unfilteredNote);
        console.log(notes);
        console.log(search);
        console.log(filter);
        this.setState({ notes });
    }

    searchByTitle(title, search) {
        return title.toLowerCase().includes(search.toLowerCase())
    }

    render() {
        return (
        <div className="container mt-5">
            <h1 className="mb-3">WELCOME TO MY NOTE</h1>
            <div className="row">
                <div className="col-8">
                    <FilterForm onFilter={this.onSearchNoteHandler}/>
                    {
                        this.state.notes.length > 0 ?
                        <NoteCardList 
                            notes={this.state.notes} 
                            onDelete={this.onDeleteNoteHandler}
                            onArchive={this.onArchiveNoteHandler}
                        /> :
                        <div className="text-center">
                            <h3 className="bg-danger text-white">Notes not found</h3>
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