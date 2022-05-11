
const Logout = (props) => {
    const { setUser } = props;
    setUser({});
    localStorage.removeItem('token');
    window.location.href='/';
    return (<div></div>);
};

export default Logout;
















































