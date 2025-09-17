import { motion } from 'framer-motion';
import ProfileCard from './components/ProfileCard';
import WeatherWidget from './components/WeatherWidget';
import QuoteGenerator from './components/QuoteGenerator';
import NotesManager from './components/NotesManager';

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
      style= {{ color: "#755f58" }}
      className= "card-header mt-4 fw-bold fs-1 text-center"
      whileHover={{ scale: 1.1, color: "#66524bff" }}
    >
      Personal Dashboard - My Space
    </motion.h1>
    <ProfileCard
    name= { user.name }
    bio= { user.bio }
    avatar= { user.avatar }
    links= {user.links} />

    <WeatherWidget />

    <QuoteGenerator />

    <NotesManager />
  </motion.div>
)
}

export default App;