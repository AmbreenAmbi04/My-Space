import {motion} from 'framer-motion';

const ProfileCard = ( { name, bio, avatar, links }) => {
    return (
        <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}>
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
            <h2>{name}</h2>
            <p>{bio}</p>
        
        </motion.div>
    );
};

export default ProfileCard;