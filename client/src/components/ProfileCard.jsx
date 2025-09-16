import {motion} from 'framer-motion';
import { useState } from 'react';

const ProfileCard = ( { name, bio, avatar, links }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [changeBio, setChangedBio] = useState(bio);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    return (
        <motion.div
            className="card container mt-5 p-4 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2 className= "card-title">{ name }</motion.h2>
            <motion.h3 className= "card-text">{ bio }</motion.h3>
            <motion.image className= "card-image">{ avatar }</motion.image>
            <motion.div className= "card-links">
                { links.map((link, index) => (
                    <motion.a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"></motion.a>
                )) }
            </motion.div>
        </motion.div>
    );
};

export default ProfileCard;