import ModelUser from '../entities/User';
import ModelHero from '../entities/Hero';



export const userRepository  = () => {
    return ModelUser;
}

export const heroRepository = () => {
    return ModelHero;
}
