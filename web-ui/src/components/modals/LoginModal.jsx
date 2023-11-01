
import {useCallback, useContext, useState} from "react";
import {
    useForm
} from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import {AuthContext} from "../../context/AuthProvider";
import axios from "../../api/axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";

const LoginModal = () => {
    const navigate = useNavigate();
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const { loading, error, dispatch } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm({
        defaultValues: {
            username: '',
            password: ''
        },
    });

    const onSubmit = (data) => {
            setIsLoading(true);
            dispatch({ type: "LOGIN_START" });
            try {
                axios.post("Login/Login", data)
                    .then(function (response) {
                        setIsLoading(false);
                        if (response.data.success === true){
                            toast.success('Logged in');
                            loginModal.onClose();
                            dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data.accessToken });
                            navigate("/admin")
                        }
                        else {
                            console.log("false")
                            toast("Wrong username or password inputted")
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }catch (err) {
                dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
            }
    }

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome back host"
                subtitle="Login to your account!"
            />
            <Input
                id="username"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
            />
            <div className="text-neutral-500 text-center mt-4 font-light">
                <p>First time using Airbnb?
                    <span
                        onClick={onToggle}
                        className="
                              text-neutral-800
                              cursor-pointer
                              hover:underline"
                    > Create an account</span>
                </p>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default LoginModal;
