function Content(props) {
    const {text, active} = props;
    return (
        <>
            <div className= {"box " + (active ? "box--active" : "")}>
                {text}
            </div>
        </>
    )
}

export default Content;