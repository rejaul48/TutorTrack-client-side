import { useContext } from "react";
import { TutorContext } from "../contextApi/TutorContext";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useLoginWithGoogle = () => {
    const { loginWithGoogle, setUser } = useContext(TutorContext);

    // find user location and navigate use router
    const location = useLocation()
    const navigate = useNavigate()

    const handleLoginWithGoogle = async () => {
        try {
            const result = await loginWithGoogle();
            console.log(result);
            Swal.fire({
                title: "Login Successful",
                icon: "success",
                draggable: true
              });
            setUser(result.user)
            // navigate user
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.error("Google login failed:", error);
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Something went wrong",
                showConfirmButton: false,
                timer: 1500
              });
            throw error;  
        }
    };

    return { handleLoginWithGoogle };
};

export default useLoginWithGoogle;
