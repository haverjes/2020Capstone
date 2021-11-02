import React from "react";
import loading from "../assets/loading.svg";

const Loading = () => (
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
);

export default Loading;
