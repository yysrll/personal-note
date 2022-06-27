import React from "react";

function NoteCard({ title, body, createdAt, archived }) {
    return (
        <div className="card text-bg-light mb-3">
            <div className="card-header">{ createdAt }</div>
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ body }</p>
            </div>
        </div>
    )
}

export default NoteCard;