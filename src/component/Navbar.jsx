import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import { useNavigate, redirect } from "react-router-dom";
import { useNavigate, redirect } from "react-router-dom";


const Navbar = () => {

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

    // function goToLogin() {
    //     const userIsInactive = useFakeInactiveUser();
    //     const navigate = useNavigate();

    //     useEffect(() => {
    //       if (userIsInactive) {
    //         fake.logout();
    //         navigate("/session-timed-out");
    //       }
    //     }, [userIsInactive]);
    //   }

    const navigate = useNavigate();



    const goToLogin = () => {
        // navigate('/login', { replace: true });
        navigate('/login');
    }

    const search=(event)=>{
        if(event.key ==="Enter"){
            console.log("fire")
            let keyword = event.target.value
            console.log("keyword: ", keyword)
            navigate(`/?q=${keyword}`)
            // event.target.value=""
        }
    }

    return (

        <div>
            <div>
                <div className='login-button' onClick={goToLogin}>
                    {/* <div className='login-button' onClick={useLogoutTimer}> */}
                    {/* <div className='login-button'> */}
                    <FontAwesomeIcon icon={faUser} />
                    <div >로그인</div>
                </div>
            </div>
            <div className='nav-section'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="H&M Logo" width={100} />
            </div>
            <div className='menu-area'>

                <ul className='menu-list'>
                    {menuList.map(menu => (<li>{menu}</li>))}
                </ul>

                <div className='searcher'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" onKeyDown={(event)=>search(event)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
