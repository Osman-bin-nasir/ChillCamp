import mongoose from 'mongoose';
import Campground from '../models/campground.js';
import cities from './cities.js';
import { descriptors, places } from './seedHelpers.js';

mongoose.connect('mongodb://localhost:27017/ChillCamp')
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err))

const sample = array => array[Math.floor(Math.random() * array.length)]

const intro = [
    "Nestled deep within the forest, this secluded campground provides a serene escape from city life.",
    "Located beside a crystal-clear mountain lake, this campsite is perfect for nature lovers.",
    "Tucked between rolling hills and tall pines, this spot offers breathtaking morning views.",
    "At the edge of a peaceful valley, this campground promises fresh air and starry nights.",
    "Surrounded by wildflowers and whispering trees, this scenic site feels like a hidden gem."
];

const features = [
    "Campers can enjoy fishing, kayaking, and miles of hiking trails.",
    "The area is rich in wildlife and features natural rock formations perfect for climbing.",
    "Modern amenities like clean restrooms, fire pits, and picnic tables are available.",
    "The campground is pet-friendly and ideal for families or solo travelers seeking quiet.",
    "Nearby, you'll find waterfalls, bird-watching spots, and bike trails."
];

const closing = [
    "Come unwind, explore, and make lasting memories under the stars.",
    "Don't miss this peaceful retreat—perfect for your next weekend getaway.",
    "Wake up to birdsong and fall asleep to the crackle of a cozy fire.",
    "Adventure, tranquility, and beauty all in one place—book now.",
    "Reconnect with nature and rediscover simple joys."
];

const generateDescription = () => {
    return `${sample(intro)} ${sample(features)} ${sample(closing)}`
}

// Lorem Picsum with specific dimensions
const staticImages = [
    'https://picsum.photos/960/720?random=1',
    'https://picsum.photos/960/720?random=2',
    'https://picsum.photos/960/720?random=3',
    'https://picsum.photos/960/720?random=4',
    'https://picsum.photos/960/720?random=5',
    'https://picsum.photos/960/720?random=6',
    'https://picsum.photos/960/720?random=7',
    'https://picsum.photos/960/720?random=8'
];

const seedDB = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i < 50; i++) {
        const randomIndex = Math.floor(Math.random() * cities.length)
        const camp = new Campground({
            location: `${cities[randomIndex].city}, ${cities[randomIndex].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            price: Math.floor(Math.random() * 1000),
            image: sample(staticImages),
            description: generateDescription()
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})