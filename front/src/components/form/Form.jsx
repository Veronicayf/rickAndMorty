import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import validation from '../../validation'
// import "./style/form.css" //asi es cuando es un CSS comun (que no es parte de react)
// import style from "./style/form.module.css"; //se importa como se fuese un JSON
import style from './style/form.module.css'


const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    //boton del ojito
    const isSubmitDisabled = !userData.email || !userData.password; //se evalua si ambos input estan completos para continuar

    const handleChange = (event) => { // valida cada input en tiempo real.

        setUserData({
            ...userData, [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData, [event.target.name]: event.target.value
        }))

        setPassword({
            ...password, [event.target.name]: event.target.value
        })
    };

    const passwordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    };


    return (
        <div className={style.contenForm}>


            <div className={style.backForm}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <label className={style.formLabel}>EMAIL:</label>
                    <input type="text" name="email" value={userData.email} onChange={handleChange} className={style.formInput} placeholder="Email" />
                    {
                        errors.e1 ? <p className={style.errorMessage}>{errors.e1}</p>
                            : errors.e2 ? <p className={style.errorMessage}>{errors.e2}</p>
                                : <p className={style.errorMessage}>{errors.e3}</p>
                    }

                    <br />

                    <label className={style.formLabel}>PASSWORD:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={userData.password}
                        // value={password}
                        onChange={handleChange}
                        placeholder="Password"
                        className={style.formInput}
                    />
                    {showPassword ? (
                        <FaEyeSlash className={style.iconEye} onClick={passwordVisibility} />)
                        : (<FaEye className={style.iconEye} onClick={passwordVisibility} />)
                    }


                    {/* {<FaEye className={style.iconEye} />} // se ve el ojito y se le asigno la clase */}
                    {
                        errors.p1 ? <p className={style.errorMessage}>{errors.p1}</p>
                            : <p className={style.errorMessage}>{errors.p2}</p>

                    }

                    <br />

                    <button type="submit" className={style.buttonForm} disabled={isSubmitDisabled}>SUBMIT</button>

                </form>
            </div>
        </div>
    )
}
export default Form;