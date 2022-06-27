import React from "react";

function ArchiveButton({ id, archived, onArchive }) {
    return (
        <button className={(archived) ? "btn btn-primary me-3" : "btn btn-outline-primary me-3"} onClick={() => onArchive(id)}>
            {(archived) ? 'Unarchived' : 'Archived'}
        </button>
    );
}

export default ArchiveButton;