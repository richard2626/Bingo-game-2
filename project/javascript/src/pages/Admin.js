import { useState, useEffect } from "react";
import Swal from "sweetalert2"
import Messages from "../components/game/messages";
import Controlpanel from "../components/game/controlpanel";

import { useSelector, useDispatch } from "react-redux";
import { admin_is_me, updateBingoList, updateGameMode, updateMyTurn, updateName, updateName } from "../redux/actions";
import { store } from "../redux/store"
import Scorepanel from "../components/game/scorepanel";

export default function Admin(props){
  const [mode, setMode] = useState(useSelector(state => state.profile.gamemode))
  const dispatch = useDispatch()

  useEffect(() => {
    setName()
  }, [])
  const setName = async () => {
    Swal.fire({
      title: "請輸入管理者密碼",
      html: `<input type="text" id="input" class="swal2-input" placeholder="password">`,
      confirmButtonText: 'Sign in',
      preConfirm: () => {
        const input =Swal.getPopup().querySelector('#input').value
        const password = 1234
        if(input == password){
            dispatch(updateName(
                { name: "Admin" }
            ))
            dispatch(admin_is_me(
                { admin_is_me: true}
            ))
        }
    }
    })
  }


  return(
    <div className="flex flex-col bg-indigo-50 text-center space-y-2 pt-10">
      <div className="flex flex-row bg-indigo-100 text-center w-full h-80 justify-center" >

        <div className="hidden md:block w-1/5 bg-red-100 py-2 px-1">
            <Messages pack={props["pack"]} />
        </div>

        <div className ="w-2" ></div>

        <div className="hidden md:block w-1/6 bg-red-100 py-2 px-1">
            <Controlpanel pack={props["pack"]} />
        </div>

        <div className =" w-2" ></div>
        
        <div className="hidden md:block w-1/6 bg-red-100 py-2 px-1">
            <Scorepanel pack={props["pack"]} />
        </div>

      </div>
    </div>
  );

}



