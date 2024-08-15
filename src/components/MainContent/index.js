function MainContent() {
    let name = "Phong";
    const css = {
        color: "red"
    }
    return (
        <>
            <div className="box">
                <div className="test" style={css}>
                    Hello Peter {name}
                </div>
                <div className="test" style={css}>
                    Hello Peter
                </div>
            </div>
        </>
    )
}

export default MainContent;