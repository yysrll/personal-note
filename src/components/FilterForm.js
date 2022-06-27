import React from "react";

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            filter: "all",
        };
        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
        this.onSelectChangeHandler = this.onSelectChangeHandler.bind(this);
    }

    onSearchChangeHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                search: event.target.value,
            }
        }, () => {
            this.props.onFilter(this.state);
        })
    }

    onSelectChangeHandler(event) {
        this.setState(() => {
            return {
                filter: event.target.value,
            }
        }, () => {
            this.props.onFilter(this.state);
        })
    }

    render() {
        return (
                <div className="row mb-3">
                    <div className="col-9">
                        <div>
                        <input type="text" className="form-control" placeholder="search note..." value={this.state.search} onChange={this.onSearchChangeHandler} />
                        </div>
                    </div>
                    <div className="col-3">
                        <select className="form-select" aria-label="Default select example" value={this.state.filter} onChange={this.onSelectChangeHandler}>
                            <option value="all">All</option>
                            <option value="archived">Archived</option>
                            <option value="inarchived">Inarchived</option>
                        </select>
                    </div>
                </div>
        );
    }
}

export default FilterForm;