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

    }

    onAddNotehandler({ title, body }) {
        this.setState((prevState) => {
            return {
                ...prevState,
                notes: [{
                    id: +new Date.now(),
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

    render() {
        return (
        <div className="container mt-5">
            <h1 className="mb-3">WELCOME TO MY NOTE</h1>
            <div className="row">
                <div className="col-8">
                    <NoteCardList notes={this.state.notes} />
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