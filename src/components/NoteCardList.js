import React from "react";
import { showFormattedDate } from "../utils/data";
import NoteCard from "./NoteCard";

function NoteCardList({ notes, onArchive, onDelete }) {
    return (
        <div className="row">
            {notes.map(item => (
                <NoteCard 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    body={item.body} 
                    createdAt={showFormattedDate(item.createdAt)} 
                    archived={item.archived}
                    onArchive={onArchive}
                    onDelete={onDelete} />
            ))}
        </div>
    )
}

export default NoteCardList;