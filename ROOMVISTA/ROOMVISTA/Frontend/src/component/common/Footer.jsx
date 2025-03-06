const FooterComponent = () => {
    return (
        <footer>
            <span className="my-footer">
                <p className="footertxt">RoomVista | Your Comfort, Our Priority &copy; {new Date().getFullYear()}</p>
            </span>
        </footer>
    );
};

export default FooterComponent;
