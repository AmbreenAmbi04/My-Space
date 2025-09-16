import { motion } from 'framer-motion';
import ProfileCard from './components/ProfileCard';

const App = () => {
  const user = {
    name: "Ambreen",
    bio: "A passionate developer with a love for creating intuitive user experiences.",
    avatar: "/images/avatar.jpg",
    links: [
        { platform: "GitHub", url: "https://github.com/AmbreenAmbi04" },
        { platform: "Vercel", url: "https://vercel.com/ambreens-projects-e8785e61" }
    ]
  }
return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
   >
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className= "app-header mt-3 ms-3 fw-bold fs-2 text-danger fs-1"
    >
      My Space
    </motion.h1>
    <ProfileCard
    name= { user.name }
    bio= { user.bio }
    avatar= { user.avatar }
    links= {user.links} />
  </motion.div>
)
}

export default App;