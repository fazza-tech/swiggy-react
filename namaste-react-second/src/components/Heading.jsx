const Heading = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="\src\assets\swiggy-logo.svg" alt="" />
                <h4 className="location">Other Kozhikodu, Kerala, India</h4>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Heading 