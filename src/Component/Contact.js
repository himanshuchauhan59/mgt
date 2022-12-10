import React from "react";


export default function Form() {
    return (
        <>
            <div className="container my-3">
                <div class="row g-3 align-items-center ">
                    <div className="col-auto">
                        <label for="inputPassword6" className="col-form-label">Password</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary">
                            Click Me
                        </button>
                    </div>
                    <div className="col-auto">
                        <span id="passwordHelpInline" className="form-text">
                        </span>
                    </div>
                </div>
            </div>
        </>
    );

}
