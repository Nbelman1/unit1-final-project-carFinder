const Modal = ( {questionSet} ) => {
    return (
        // TODO: link useState to question id and answer selected
        <div>
            <h2>Info</h2>
            <h3>X</h3>
            {/* TODO: find image */}
            {/* <img src="source-here" alt="alt-here" width="width" height="height"></img> */}
            <p><strong>{questionSet[0]["answers"][0]["answer"]}</strong></p>
            <p>{questionSet[0]["answers"][0]["modalContent"]}</p>
        </div>
    );
};

export default Modal;
