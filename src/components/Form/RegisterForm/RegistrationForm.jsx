import React, { useState } from 'react';
import styles from './registerForm.css'
import { useForm } from "react-hook-form";
import Title from './../Title/Title';
import Modal from '../Modal/Modal';

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch('password', '');

    const [registerData, setRegisterData] = useState(null);
    const [modalActive, setActive] = useState(false)


    const onSubmit = (data) => {
        setRegisterData(data);
        setActive(true)
    }

 
    return (
        <div className='wrapp'>
            <Title modalActive={modalActive}/>
            {/* form */}
            <div className='formWrap'>
                {modalActive ? <Modal registerData={registerData} /> : <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <div>
                        <label className='label'> Введите имя:</label>
                        <div className='containerForm'>
                            <input type="text"
                                placeholder='Name'
                                className='input'
                                {...register('name', {
                                    required: 'Обязательное поле',
                                })
                                }
                            />
                            <p className='errorMessage'>{errors.name?.message}</p>
                        </div>
                    </div>

                    <div>
                        <label className='label'> Введите Email:</label>
                        <div className='containerForm'>
                            <input type="text"
                                placeholder='Format: student@redev.com'
                                className='input'
                                {...register('email', {
                                    required: 'Format: student@redev.com',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Введите корректный email'
                                    }
                                })
                                }

                            />
                            <p className='errorMessage'>{errors.email?.message}</p>
                        </div>
                    </div>

                    <div className=''>
                        <label className='label'> Введите пароль:</label>
                        <div className='containerForm'>

                            <input type="password"
                                placeholder='Name'
                                className='input'
                                {...register('password', {
                                    required: 'Обязательное поле',
                                    minLength: {
                                        value: 6,
                                        message: 'Пароль - не менее 6 символов'
                                    }
                                })
                                }
                            />
                        </div>
                        <p className='errorMessage'>{errors.password?.message}</p>
                    </div>



                    <div>
                        <label className='label'> Подтвердите пароль:</label>
                        <div className='containerForm'>
                            <input type="password"
                                placeholder='Password '
                                className='input'
                                {...register('password_check', {
                                    required: 'Обязательное поле',
                                    validate: value => value === password || 'Пароли должны совпадать'
                                })
                                }

                            />
                            <p className='errorMessage'>{errors.password_check?.message}</p>
                        </div>
                    </div>




                    <div>
                        <label className='label'>Дата рождения:</label>
                        <div className='containerForm'>
                            <input type="text"
                                placeholder='Birthday'
                                className='input'
                                {...register('birthday', {
                                    required: 'Обязательное поле',
                                })
                                }

                            />
                            <p className='errorMessage'>{errors.birthday?.message}</p>
                        </div>
                    </div>


                    <div>
                        <label className='label'>Укажите пол</label>
                        <div className='containerForm'>
                            <input type="text"
                                placeholder='Gender'
                                className='input'
                                {...register('gender', {
                                    required: 'Обязательное поле',
                                })
                                }

                            />
                            <p className='errorMessage'>{errors.gender?.message}</p>
                        </div>
                    </div>

                    <div>
                        <label className='label'>Укажите телефон</label>
                        <div className='containerForm'>
                            <input type="text"
                                placeholder='Phone'
                                className='input'
                                {...register('phone', {
                                    required: 'Обязательное поле',
                                })
                                }
                            />
                            <p className='errorMessage'>{errors.phone?.message}</p>
                        </div>
                    </div>
                    <button type='submit' className='buttonSubmitForm'>Зарегистрироваться.</button>
                </form>}
            </div>


        </div>
    );
};

export default RegistrationForm;