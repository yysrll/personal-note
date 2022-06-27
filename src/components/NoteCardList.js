import React from "react";
import { showFormattedDate } from "../utils/data";
import NoteCard from "./NoteCard";

function NoteCardList({ notes }) {
    return (
        <div className="row">
            {notes.map(item => (
                <NoteCard key={item.id} title={item.title} body={item.body} createdAt={showFormattedDate(item.createdAt)} archived={item.archived} />
            ))}
        </div>
    )
}

export default NoteCardList;