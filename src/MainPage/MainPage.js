import React from "react";
import {signout} from "../Api/ApiService"


function MainPage(){
    return(
        <div>
            hello
            <button id="logoutbtn" onClick={signout}>๋ก๊ทธ์์</button>
            
        </div>
        
    )
}

export default MainPage;