import { motion } from "framer-motion";
import { useState } from "react";

const ProfileCard = ({ name, bio, avatar, links }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [changeBio, setChangedBio] = useState(bio);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <motion.div
      className="card container col-md-8 mt-4 p-4 shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, color: "#66524bff" }}
    >
      <motion.img
        src={avatar}
        alt={name}
        className="card-image rounded-circle mb-3 d-block mx-auto"
        width= "180px"
        height= "180px"
        whileHover={{ scale: 1.1 }}
      />
      <motion.h2 
        className="card-title fw-bold fs-1"
        style= {{ color: "#755f58" }}
        whileHover={{ scale: 1.1, color: "#66524bff" }}
        transition={{ type: "spring", stiffness: 200 }}
        >{name}
        </motion.h2>

      {isEditing ? (
        <motion.div>
          <motion.textarea
            value={ changeBio }
            onChange={(e) => setChangedBio(e.target.value)}
            className="form-control my-2 fs-4 fw-semibold"
            style= {{ color: "#d29578" }}
          />
          <motion.button
            onClick={handleSave}
            className="btn btn-md mt-2 fs-4 fw-semibold"
            style= {{ backgroundColor: "#c8ac0cff" }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, color: "#a89213ff" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Save
          </motion.button>
        </motion.div>
      ) : (
        <motion.p
            className="card-text fs-4 fw-semibold"
            style= {{ color: "#a06148" }}
            whileHover={{ scale: 1.1, color: "#904f35ff" }}
            transition={{ type: "spring", stiffness: 200 }}
            >{ changeBio }
        </motion.p>
      )}

      <motion.div className="card-links mt-3">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 fs-4 fw-semibold no-underline"
            style= {{ color: "#d29578" }}
            whileHover={{ scale: 1.1, color: "#9b6952ff" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {link.platform}
          </motion.a>
        ))}
      </motion.div>

      <motion.button
        onClick={() => setIsEditing(!isEditing)}
        className="btn btn-md mt-3 fs-3 fw-semibold"
        style= {{ backgroundColor: "#808080" }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1, color: "#5a5757ff" }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {isEditing ? "Cancel" : "Edit"}
      </motion.button>
    </motion.div>
  );
};

export default ProfileCard;
