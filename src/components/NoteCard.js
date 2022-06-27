import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteCard({ id, title, body, createdAt, archived, onArchive, onDelete }) {
    return (
        <div className="card text-bg-light mb-3">
            <div className="card-header">
                <div className="d-flex justify-content-between">
                    { createdAt }
                    <div>
                        <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
                        <DeleteButton id={id} onDelete={onDelete} />
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ body }</p>
            </div>
        </div>
    )
}

export default NoteCard;