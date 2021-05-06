let CallSection = () => {
    
    let callSubmit = (e) => e.preventDefault() 

    return (
        <section className="call">
            <h1 className="call__title">Let's do <br /> This</h1>
            <form className="call-form" onSubmit={callSubmit}>
                <input className="call-form__input" type="text" placeholder="How much could you see?" />
                <button className="call-form__button" type="submit">Lets crunch some numbers</button>
            </form>
        </section>
    );
}

export { CallSection }