function NavigationMenu() {
    const box = document.querySelector(".box")
    const click = (e) => {
        console.log(e.target);
        //box.classList.add("light-blue");
    }

    const clickBg = () => {
        box.classList.remove("box");
        box.classList.add("light-blue");
    }

    const change = (e) => {
        console.log(e.target.value)
    }

    const focus = (e) => {
        console.log(e);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
    }

    return (
        <>
            <div className= {"box"}>
                <div>NavigationMenu</div>
                <form onSubmit={submit}>
                    <input type="text" onChange={change} onFocus={focus}></input>
                    <button onClick={click}>Click</button>
                </form>
                <button onClick={clickBg}>Click</button>
            </div>
        </>
    )
}

export default NavigationMenu;