import {userConstants} from './actionTypes';
import {alertActions} from '.';
import {history} from '../../_helper/history';
import {userService} from "../../_services/user.service";

export const userActions = {
    login,
    logout,
    register,
};

function login(email, password) {

    return dispatch => {
        dispatch(request({email}));

        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/admin/dashboard');
                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log('error')
                    console.log(error)
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) {
        return {type: userConstants.LOGIN_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
}

function logout() {
    userService.logout();
    return {type: userConstants.LOGOUT};
}

function register(username, registerEmail, registerPassword, registerConfirmPassword) {
    const user = {username, registerEmail, registerPassword, registerConfirmPassword}

    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/auth/login-page');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) {
        return {type: userConstants.REGISTER_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.REGISTER_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.REGISTER_FAILURE, error}
    }
}
