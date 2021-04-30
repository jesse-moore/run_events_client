import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { Hero } from '../components/Hero';
import { SignupModal } from '../components/SignupModal';
import { LoginModal } from '../components/LoginModal';
import { Feature } from '../components/Feature';

import { FeatureSection } from '../components/FeatureSection';

export const Home = () => {
    const uiState = useSelector((state: RootState) => state.ui);
    const { modals } = uiState;
    return (
        <div className="relative">
            <Hero />
            <FeatureSection>
                <Feature>App Feature</Feature>
                <Feature>App Feature</Feature>
                <Feature>App Feature</Feature>
                <Feature>App Feature</Feature>
            </FeatureSection>
            <footer className="text-center h-24 flex justify-center items-center">
                <div>FOOTER</div>
            </footer>
            {modals.signupForm ? <SignupModal /> : null}
            {modals.loginForm ? <LoginModal /> : null}
        </div>
    );
};
