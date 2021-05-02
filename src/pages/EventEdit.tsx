import React, { useState, useEffect, useReducer } from 'react';
import dayjs from 'dayjs';
import { Hero } from '../components/event-edit/Hero';
import { EventActionInterface, EventInterface } from '../types';

function init({
    name = '',
    heroImg = '',
    date = dayjs().format('dddd MMMM DD, YYYY'),
    address = '',
    city = '',
    state = '',
}): EventInterface {
    return {
        name,
        heroImg,
        date,
        address,
        city,
        state,
    };
}

function reducer(state: EventInterface, action: EventActionInterface) {
    switch (action.type) {
        case 'updateName':
            return { ...state, name: action.payload };
        case 'updateDate':
            return { ...state, date: action.payload };
        case 'updateAddress':
            return { ...state, address: action.payload };
        case 'init':
            return action.payload ? init(action.payload) : init({});
        default:
            return state;
    }
}

export const EventEdit = () => {
    const [eventState, dispatch] = useReducer(reducer, {}, init);
    useEffect(() => {
        try {
            const data = localStorage.getItem('eventState');
            if (data) {
                const localState = JSON.parse(data);
                dispatch({ type: 'init', payload: localState });
            }
        } catch (error) {
            console.log(error.message);
        }
        const reInit = () => {
            const data = localStorage.getItem('eventState');
            if (data) {
                const localState = JSON.parse(data);
                dispatch({ type: 'init', payload: localState });
            }
        };
        window.addEventListener('storage', reInit, true); 
        return () => {
            window.removeEventListener('storage', reInit, true);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('eventState', JSON.stringify(eventState));
    }, [eventState]);

    const { date, name, address, city, state, heroImg } = eventState;
    return (
        <div>
            <Hero
                dispatch={dispatch}
                data={{ date, name, address, city, state, heroImg }}
            />
        </div>
    );
};
