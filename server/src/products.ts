export interface product {
    id: number,
    name: string,
    image: string,
    price: number,
    title: string,
    description: string,
}



const products: product[] = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        image: "http://localhost:8080/screen2.png",
        price: 99.99,
        title: "Noise-Cancelling Wireless Bluetooth Headphones",
        description: "High-quality wireless Bluetooth headphones with noise-canceling features for an immersive audio experience."
    },
    {
        id: 2,
        name: "Smartphone XYZ",
        image: "http://localhost:8080/screen1.png",
        price: 699.99,
        title: "Latest XYZ Smartphone",
        description: "A cutting-edge smartphone with a 6.5-inch display, 128GB storage, and a powerful triple-camera system."
    },
    {
        id: 3,
        name: "4K Ultra HD Smart TV",
        image: "https://example.com/images/tv.jpg",
        price: 499.99,
        title: "55-inch 4K Ultra HD Smart TV",
        description: "Enjoy stunning visuals with this 55-inch 4K Ultra HD Smart TV, featuring built-in apps and voice control."
    },
    {
        id: 4,
        name: "Gaming Laptop",
        image: "https://example.com/images/laptop.jpg",
        price: 1199.99,
        title: "High-Performance Gaming Laptop",
        description: "This gaming laptop features 16GB RAM, a 512GB SSD, and an NVIDIA graphics card for seamless gaming."
    },
    {
        id: 5,
        name: "Smartwatch Series 5",
        image: "https://example.com/images/smartwatch.jpg",
        price: 199.99,
        title: "Smartwatch with Heart-Rate Monitor",
        description: "Stay connected and healthy with this smartwatch, featuring a heart-rate monitor, GPS, and up to 48 hours battery life."
    },
    {
        id: 6,
        name: "Digital Camera",
        image: "https://example.com/images/camera.jpg",
        price: 399.99,
        title: "High-Resolution Digital Camera",
        description: "Capture high-quality photos and videos with this 24.2MP digital camera, perfect for professionals and enthusiasts."
    },
    {
        id: 7,
        name: "Wireless Earbuds",
        image: "https://example.com/images/earbuds.jpg",
        price: 49.99,
        title: "True Wireless Earbuds",
        description: "Compact and powerful, these wireless earbuds offer crystal clear sound and up to 24 hours of battery life."
    },
    {
        id: 8,
        name: "Portable Bluetooth Speaker",
        image: "https://example.com/images/speaker.jpg",
        price: 59.99,
        title: "Waterproof Bluetooth Speaker",
        description: "Take your music anywhere with this portable Bluetooth speaker, which is waterproof and offers 10 hours of playtime."
    },
    {
        id: 9,
        name: "Tablet Pro 10.1",
        image: "https://example.com/images/tablet.jpg",
        price: 299.99,
        title: "10.1-Inch Pro Tablet",
        description: "Experience productivity on the go with this tablet, featuring a 10.1-inch screen, 64GB storage, and a long-lasting battery."
    },
    {
        id: 10,
        name: "Wireless Charging Pad",
        image: "https://example.com/images/charging-pad.jpg",
        price: 29.99,
        title: "Fast Wireless Charging Pad",
        description: "Charge your devices wirelessly and quickly with this sleek and compact wireless charging pad."
    },
    {
        id: 11,
        name: "Fitness Tracker Band",
        image: "https://example.com/images/fitness-tracker.jpg",
        price: 49.99,
        title: "Fitness Tracker with Heart Rate Monitor",
        description: "Monitor your fitness and health with this sleek fitness tracker, featuring a heart rate monitor and step counter."
    },
    {
        id: 12,
        name: "VR Headset",
        image: "https://example.com/images/vr-headset.jpg",
        price: 299.99,
        title: "Virtual Reality Headset",
        description: "Immerse yourself in virtual worlds with this high-quality VR headset, compatible with all major platforms."
    },
    {
        id: 13,
        name: "Smart Home Hub",
        image: "https://example.com/images/smart-home-hub.jpg",
        price: 89.99,
        title: "Smart Home Automation Hub",
        description: "Control all your smart devices from one place with this smart home hub, compatible with Alexa and Google Home."
    },
    {
        id: 14,
        name: "Robot Vacuum Cleaner",
        image: "https://example.com/images/vacuum.jpg",
        price: 249.99,
        title: "Smart Robot Vacuum Cleaner",
        description: "Keep your floors clean effortlessly with this smart robot vacuum, which features automatic cleaning modes."
    },
    {
        id: 15,
        name: "Electric Toothbrush",
        image: "https://example.com/images/toothbrush.jpg",
        price: 49.99,
        title: "Rechargeable Electric Toothbrush",
        description: "Maintain your dental hygiene with this rechargeable electric toothbrush, offering multiple cleaning modes."
    }
]

export default products;
