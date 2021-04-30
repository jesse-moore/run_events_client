import { useDispatch } from 'react-redux';
import { toggleSignupForm, toggleLoginForm } from '../redux/reducers/ui';
import { Button } from './Button';

export const NarBar = () => {
    const dispatch = useDispatch();
    return (
        <div className="w-full h-14 px-4 flex flex-row items-center bg-white sticky top-0 z-10">
            <div className="mr-auto">LOGO</div>

            <Button name="Events" />
            <Button name="Login" onClick={() => dispatch(toggleLoginForm())} />
            <Button
                name="Signup"
                type="primary"
                onClick={() => dispatch(toggleSignupForm())}
            />
        </div>
    );
};
