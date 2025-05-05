import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/DestinationDetail.css';

const DestinationDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const destinationDetails = {
    
      "Kashmir Paradise": { 
        title: 'Kashmir Paradise',
        description: `Discover the breathtaking beauty of Kashmir, often called 'Paradise on Earth'. Enjoy serene shikara rides on Dal Lake, explore the stunning landscapes of Gulmarg, and experience warm Kashmiri hospitality.`,
        highlights: [
          'Flight tickets included',
          'Luxury hotel accommodation',
          'Shikara ride on Dal Lake',
          'Gulmarg sightseeing tour',
          'Local Kashmiri cuisine tasting'
        ],
        price: '$999',
        duration: '6 days',
        images: ['/images/kashmir1.jpg', '/images/kashmir2.jpg', '/images/kashmir3.jpg']
      },
      "Goa Beaches": { 
        title: 'Goa Beaches',
        description: `Experience the vibrant beaches of Goa, where golden sands meet azure waters. Enjoy thrilling water sports, exciting nightlife, and relax at luxurious beach resorts in India's party capital.`,
        highlights: [
          'Flight tickets included',
          'Beachfront resort stay',
          'Water sports activities',
          'Nightlife experience',
          'Local Goan seafood feast'
        ],
        price: '$799',
        duration: '5 days',
        images: ['/images/goa2.jpg', '/images/goa1.jpg', '/images/goa3.jpg']
      },
      "Rajasthan Royal Tour": { 
        title: 'Rajasthan Royal Tour',
        description: `Step into the regal world of Rajasthan with palace stays, camel safaris, and magnificent fort tours. Experience the royal heritage and colorful culture of India's desert state.`,
        highlights: [
          'Flight tickets included',
          'Heritage palace accommodation',
          'Camel safari experience',
          'Fort tours with guides',
          'Traditional Rajasthani dinner'
        ],
        price: '$1,099',
        duration: '7 days',
        images: ['/images/rajasthan1.jpg', '/images/rajasthan2.jpg', '/images/rajasthan3.jpg']
      },
      "Kerala Backwaters": { 
        title: 'Kerala Backwaters',
        description: `Cruise through the tranquil backwaters of Kerala on traditional houseboats. Experience rejuvenating Ayurvedic treatments, witness cultural performances, and enjoy the lush green landscapes.`,
        highlights: [
          'Flight tickets included',
          'Premium houseboat stay',
          'Authentic Ayurvedic massage',
          'Kathakali cultural show',
          'Village tour experience'
        ],
        price: '$899',
        duration: '6 days',
        images: ['/images/kerala2.jpg', '/images/kerala1.jpg', '/images/kerala3.jpg']
      },
      "Leh-Ladakh Adventure": { 
        title: 'Leh-Ladakh Adventure',
        description: `Embark on an unforgettable adventure in the high-altitude desert of Ladakh. Experience thrilling bike rides, visit the stunning Pangong Lake, and explore ancient Buddhist monasteries.`,
        highlights: [
          'Flight tickets included',
          'Comfortable hotel stay',
          'Bike ride through mountains',
          'Pangong Lake visit',
          'Monastery tours'
        ],
        price: '$1,299',
        duration: '8 days',
        images: ['/images/ladakh3.jpg', '/images/ladakh1.jpg', '/images/ladakh2.jpg']
      },
      "Andaman Islands Escape": { 
        title: 'Andaman Islands Escape',
        description: `Discover the tropical paradise of Andaman Islands with pristine beaches, amazing marine life, and historical sites. Enjoy scuba diving, island hopping, and relaxing at beach resorts.`,
        highlights: [
          'Flight tickets included',
          'Beach resort accommodation',
          'Scuba diving experience',
          'Cellular Jail light show',
          'Island hopping tour'
        ],
        price: '$1,199',
        duration: '7 days',
        images: ['/images/andaman1.jpg', '/images/andaman2.jpg', '/images/andaman3.jpg']
      },
      "Agra Heritage Tour": { 
        title: 'Agra Heritage Tour',
        description: `Witness the magnificent Taj Mahal and other Mughal wonders in Agra. Explore the rich history, architecture, and culture of this UNESCO World Heritage city.`,
        highlights: [
          'Train tickets included',
          'Hotel accommodation',
          'Taj Mahal sunrise visit',
          'Agra Fort tour',
          'Local handicraft shopping'
        ],
        price: '$599',
        duration: '3 days',
        images: ['/images/agra2.jpg', '/images/agra1.jpg', '/images/agra3.jpg']
      },
      "Meghalaya Nature Trail": { 
        title: 'Meghalaya Nature Trail',
        description: `Explore the breathtaking natural wonders of Meghalaya, from living root bridges to stunning waterfalls. Experience unique homestays and the vibrant Khasi culture.`,
        highlights: [
          'Flight tickets included',
          'Traditional homestay',
          'Living root bridge trek',
          'Waterfall visits',
          'Local tribal interaction'
        ],
        price: '$999',
        duration: '6 days',
        images: ['/images/meghalaya1.jpg', '/images/meghalaya2.jpg', '/images/meghalaya3.jpg']
      },
      "Ooty Hill Escape": { 
        title: 'Ooty Hill Escape',
        description: `Escape to the charming hill station of Ooty with its rolling tea gardens, pleasant climate, and colonial charm. Enjoy toy train rides and stunning botanical gardens.`,
        highlights: [
          'Train tickets included',
          'Hill resort accommodation',
          'Botanical garden tour',
          'Tea plantation visit',
          'Toy train experience'
        ],
        price: '$699',
        duration: '4 days',
        images: ['/images/ooty1.jpg', '/images/ooty2.jpg', '/images/ooty3.jpg']
      },
      "Varanasi Spiritual Journey": { 
        title: 'Varanasi Spiritual Journey',
        description: `Experience the spiritual heart of India in Varanasi, the oldest living city. Witness mesmerizing Ganga aarti ceremonies, explore ancient temples, and walk through historic ghats.`,
        highlights: [
          'Train tickets included',
          'Ganges view hotel',
          'Ganga aarti experience',
          'Temple walking tour',
          'Boat ride on Ganges'
        ],
        price: '$649',
        duration: '4 days',
        images: ['/images/varanasi1.jpg', '/images/varanasi2.jpg', '/images/varanasi3.jpg']
      },
      "Coorg Coffee Trails": { 
        title: 'Coorg Coffee Trails',
        description: `Immerse yourself in the aromatic coffee plantations of Coorg, known as the Scotland of India. Enjoy nature walks, local Kodava cuisine, and misty mountain views.`,
        highlights: [
          'Luxury resort stay',
          'Coffee estate guided tour',
          'Nature walks',
          'Local transport included',
          'Traditional Kodava meal'
        ],
        price: '$749',
        duration: '4 days',
        images: ['/images/coorg1.jpg', '/images/coorg2.jpg', '/images/coorg3.jpg']
      },
      "Hampi Heritage Tour": { 
        title: 'Hampi Heritage Tour',
        description: `Step back in time at the UNESCO World Heritage site of Hampi, with its magnificent ruins, ancient temples, and unique boulder landscapes.`,
        highlights: [
          'Train tickets included',
          'Heritage hotel stay',
          'Temple complex tours',
          'Coracle boat ride',
          'Sunset at Hemakuta Hill'
        ],
        price: '$699',
        duration: '4 days',
        images: ['/images/hampi.jpg', '/images/hampi2.jpg', '/images/hampi3.jpg']
      },
      "Darjeeling Delight": { 
        title: 'Darjeeling Delight',
        description: `Experience the magic of Darjeeling with its world-famous tea gardens, Himalayan views, and charming colonial-era toy train.`,
        highlights: [
          'Flight tickets included',
          'Tea garden view hotel',
          'Toy train joy ride',
          'Tea estate tour',
          'Sunrise at Tiger Hill'
        ],
        price: '$799',
        duration: '5 days',
        images: ['/images/darjeeling1.jpg', '/images/darjeeling2.jpg', '/images/darjeeling3.jpg']
      },
      "Sikkim Serenity": { 
        title: 'Sikkim Serenity',
        description: `Discover the peaceful beauty of Sikkim with its Buddhist monasteries, alpine lakes, and stunning Himalayan vistas.`,
        highlights: [
          'Flight tickets included',
          'Comfortable hotel stay',
          'Tsomgo Lake visit',
          'Monastery meditation session',
          'Local cuisine tasting'
        ],
        price: '$899',
        duration: '6 days',
        images: ['/images/sikkim1.jpg', '/images/sikkim2.jpg', '/images/sikkim3.jpg']
      },
      "Manali Snow Adventure": { 
        title: 'Manali Snow Adventure',
        description: `Experience thrilling winter adventures in Manali, from skiing in Solang Valley to exploring snow-capped mountain landscapes.`,
        highlights: [
          'Flight tickets included',
          'Snow view hotel',
          'Skiing lessons',
          'Solang Valley tour',
          'Hot spring bath'
        ],
        price: '$999',
        duration: '5 days',
        images: ['/images/manali1.jpg', '/images/manali2.jpg', '/images/manali3.jpg']
      },
      "Shimla Getaway": { 
        title: 'Shimla Getaway',
        description: `Relive the colonial charm of Shimla with its Mall Road, historic buildings, and panoramic Himalayan views.`,
        highlights: [
          'Train tickets included',
          'Heritage hotel stay',
          'Mall Road shopping',
          'Kufri day trip',
          'Christ Church visit'
        ],
        price: '$899',
        duration: '5 days',
        images: ['/images/shimla1.jpg', '/images/shimla2.jpg', '/images/shimla3.jpg']
      },
      "Udaipur Romantic Escape": { 
        title: 'Udaipur Romantic Escape',
        description: `Experience the romance of Udaipur, the City of Lakes, with its beautiful palaces, boat rides, and stunning sunsets.`,
        highlights: [
          'Flight tickets included',
          'Lake view palace hotel',
          'Boat ride on Lake Pichola',
          'City Palace tour',
          'Traditional dance performance'
        ],
        price: '$849',
        duration: '5 days',
        images: ['/images/udaipur1.jpg', '/images/udaipur2.jpg', '/images/udaipur3.jpg']
      },
      "Mysore Heritage Walk": { 
        title: 'Mysore Heritage Walk',
        description: `Explore the royal heritage of Mysore with its magnificent palace, silk markets, and sandalwood products.`,
        highlights: [
          'Train tickets included',
          'Heritage hotel stay',
          'Mysore Palace tour',
          'Local sightseeing',
          'Sandalwood shopping'
        ],
        price: '$699',
        duration: '4 days',
        images: ['/images/mysore1.jpg', '/images/mysore2.jpg', '/images/mysore3.jpg']
      },
      "Madurai Temple Tour": { 
        title: 'Madurai Temple Tour',
        description: `Discover the spiritual and architectural wonders of Madurai, home to the magnificent Meenakshi Temple and rich Tamil culture.`,
        highlights: [
          'Train tickets included',
          'Temple view hotel',
          'Meenakshi Temple tour',
          'Cultural performances',
          'Local market visit'
        ],
        price: '$599',
        duration: '3 days',
        images: ['/images/madurai1.jpg', '/images/madurai2.jpg', '/images/madurai3.jpg']
      },
      "Tirupati Pilgrimage": { 
        title: 'Tirupati Pilgrimage',
        description: `Embark on a spiritual journey to Tirupati, one of India's most sacred pilgrimage sites with its famous Venkateswara Temple.`,
        highlights: [
          'Train tickets included',
          'Darshan booking arranged',
          'Comfortable hotel stay',
          'Guide service',
          'Local temple cuisine'
        ],
        price: '$549',
        duration: '3 days',
        images: ['/images/tirupati1.jpg', '/images/tirupati2.jpg', '/images/tirupati3.jpg']
      },
      "Pondicherry French Escape": { 
        title: 'Pondicherry French Escape',
        description: `Experience the unique French colonial charm of Pondicherry with its beaches, spiritual centers, and Mediterranean-style architecture.`,
        highlights: [
          'Train tickets included',
          'Beachfront heritage stay',
          'Auroville visit',
          'Cycling tour',
          'French quarter walk'
        ],
        price: '$749',
        duration: '4 days',
        images: ['/images/pondicherry1.jpg', '/images/pondicherry2.jpg', '/images/pondicherry3.jpg']
      },
      "Mumbai City Life": { 
        title: 'Mumbai City Life',
        description: `Experience the vibrant energy of Mumbai, India's financial capital, with its iconic landmarks, Bollywood connections, and coastal beauty.`,
        highlights: [
          'Flight tickets included',
          'City center hotel',
          'Comprehensive city tour',
          'Marine Drive sunset',
          'Elephanta Caves visit'
        ],
        price: '$699',
        duration: '4 days',
        images: ['/images/mumbai1.jpg', '/images/mumbai2.jpg', '/images/mumbai3.jpg']
      },
      "Delhi Historical Tour": { 
        title: 'Delhi Historical Tour',
        description: `Explore the rich history of Delhi through its magnificent monuments, bustling markets, and diverse cultural heritage.`,
        highlights: [
          'Train tickets included',
          'Central location hotel',
          'Monument tours with guide',
          'Chandni Chowk rickshaw ride',
          'Cultural performances'
        ],
        price: '$599',
        duration: '4 days',
        images: ['/images/delhi.jpg', '/images/delhi2.jpg', '/images/delhi3.jpg']
      },
      "Rishikesh Yoga Retreat": { 
        title: 'Rishikesh Yoga Retreat',
        description: `Rejuvenate your mind and body in Rishikesh, the yoga capital of the world, with Ganga views, meditation, and adventure activities.`,
        highlights: [
          'Train tickets included',
          'Ashram accommodation',
          'Daily yoga sessions',
          'Ganga rafting',
          'Evening Ganga aarti'
        ],
        price: '$799',
        duration: '5 days',
        images: ['/images/rishikesh1.jpg', '/images/rishikesh2.jpg', '/images/rishikesh3.jpg']
      },
      "Haridwar Spiritual Tour": { 
        title: 'Haridwar Spiritual Tour',
        description: `Immerse yourself in the spiritual atmosphere of Haridwar, one of India's holiest cities, with its sacred ghats and temples.`,
        highlights: [
          'Train tickets included',
          'Ganges view hotel',
          'Ganga aarti experience',
          'Temple visits',
          'Local cuisine tasting'
        ],
        price: '$699',
        duration: '4 days',
        images: ['/images/haridwar.jpg', '/images/haridwar2.jpg', '/images/haridwar3.jpg']
      },
      "Kanyakumari Sunset Tour": { 
        title: 'Kanyakumari Sunset Tour',
        description: `Witness breathtaking sunrises and sunsets at India's southernmost tip where three seas meet, with spiritual and natural attractions.`,
        highlights: [
          'Train tickets included',
          'Ocean view hotel',
          'Sunset viewing',
          'Vivekananda Rock visit',
          'Local market tour'
        ],
        price: '$649',
        duration: '3 days',
        images: ['/images/kanyakumari.jpg', '/images/kanyakumari2.jpg', '/images/kanyakumari3.jpg']
      },
      "Munnar Green Hills": { 
        title: 'Munnar Green Hills',
        description: `Discover the lush tea gardens and misty hills of Munnar, Kerala's picturesque hill station with abundant natural beauty.`,
        highlights: [
          'Flight tickets included',
          'Tea estate resort',
          'Tea garden walks',
          'Wildlife sanctuary visit',
          'Local spice shopping'
        ],
        price: '$899',
        duration: '5 days',
        images: ['/images/munnar.jpg', '/images/munnar2.jpg', '/images/munnar3.jpg']
      },
      "Alleppey Houseboat Bliss": { 
        title: 'Alleppey Houseboat Bliss',
        description: `Experience the unique Kerala backwaters living on traditional houseboats, cruising through palm-fringed canals and villages.`,
        highlights: [
          'Flight tickets included',
          'Premium houseboat stay',
          'All meals included',
          'Village tour',
          'Sunset cruise'
        ],
        price: '$849',
        duration: '4 days',
        images: ['/images/alleppey.jpg', '/images/alleppey2.jpg', '/images/alleppey3.jpg']
      },
      "Chikmagalur Coffee Tour": { 
        title: 'Chikmagalur Coffee Tour',
        description: `Explore the birthplace of Indian coffee in Chikmagalur's aromatic plantations, with trekking and nature experiences.`,
        highlights: [
          'Plantation resort stay',
          'Coffee estate tour',
          'Nature trekking',
          'Local guide service',
          'Coffee tasting session'
        ],
        price: '$799',
        duration: '4 days',
        images: ['/images/chikmagalur.jpg', '/images/chikmagalur2.jpg', '/images/chikmagalur3.jpg']
      },
      "Bangalore Tech City Tour": { 
        title: 'Bangalore Tech City Tour',
        description: `Experience the dynamic blend of technology and culture in Bangalore, India's Silicon Valley with beautiful gardens and vibrant nightlife.`,
        highlights: [
          'Flight tickets included',
          'City center hotel',
          'Tech park visits',
          'Lalbagh garden tour',
          'Local brewery experience'
        ],
        price: '$699',
        duration: '4 days',
        images: ['/images/bangalore.jpg', '/images/bangalore2.jpg', '/images/bangalore3.jpg']
      },
      "Hyderabad Nizam Tour": { 
        title: 'Hyderabad Nizam Tour',
        description: `Discover the royal Nizami heritage of Hyderabad with its iconic Charminar, delicious biryani, and historic landmarks.`,
        highlights: [
          'Flight tickets included',
          'Heritage hotel stay',
          'Charminar visit',
          'Golconda Fort tour',
          'Biryani tasting'
        ],
        price: '$749',
        duration: '4 days',
        images: ['/images/hyderabad.jpg', '/images/hyderabad2.jpg', '/images/hyderabad3.jpg']
      },
      "Kolkata Culture Trip" : { 
        title: 'Kolkata Culture Trip',
        description: `Immerse yourself in Kolkata's rich cultural heritage, colonial architecture, literary history, and famous Bengali cuisine.`,
        highlights : [
          'Train tickets included',
          
          'Heritage hotel stay',
          'Victoria Memorial visit',
          'Street food tour',
          'Howrah Bridge walk'
        ],
        price: '$699',
        duration: '4 days',
        images: ['/images/kolkata1.jpg', '/images/kolkata2.jpg', '/images/kolkata3.jpg']
      },
      "Amritsar Golden Tour": { 
        title: 'Amritsar Golden Tour',
        description: `Experience the spiritual magnificence of Amritsar's Golden Temple and the patriotic fervor of the Wagah Border ceremony.`,
        highlights: [
          'Train tickets included',
          'Near-temple hotel',
          'Golden Temple visit',
          'Wagah border ceremony',
          'Local langar experience'
        ],
        price: '$599',
        duration: '3 days',
        images: ['/images/amritsar1.jpg', '/images/amritsar2.jpg', '/images/amritsar3.jpg']
      },
      "Chennai Cultural Circuit": { 
        title: 'Chennai Cultural Circuit',
        description: `Explore Chennai's rich cultural heritage through its temples, beaches, classical music, and delicious South Indian cuisine.`,
        highlights: [
          'Train tickets included',
          'Beachfront hotel',
          'Marina Beach walk',
          'Temple tours',
          'Classical music performance'
        ],
        price: '$649',
        duration: '4 days',
        images: ['/images/chennai.jpg', '/images/chennai2.jpg', '/images/chennai3.jpg']
      },
      "Bikaner Desert Safari": { 
        title: 'Bikaner Desert Safari',
        description: `Experience the magic of Rajasthan's desert with camel safaris, folk performances, and stays in luxury desert camps.`,
        highlights: [
          'Flight tickets included',
          'Desert camp stay',
          'Camel safari ride',
          'Folk dance performance',
          'Junagarh Fort visit'
        ],
        price: '$899',
        duration: '5 days',
        images: ['/images/bikaner.jpg', '/images/bikaner2.jpg', '/images/bikaner3.jpg']
      },
      "Mount Abu Retreat": { 
        title: 'Mount Abu Retreat',
        description: `Escape to Rajasthan's only hill station with its cool climate, stunning Dilwara Temples, and beautiful Nakki Lake.`,
        highlights: [
          'Train tickets included',
          'Hill resort stay',
          'Dilwara Temples visit',
          'Nakki Lake boating',
          'Sunset point visit'
        ],
        price: '$749',
        duration: '4 days',
        images: ['/images/mountabu.jpg', '/images/mountabu2.jpg', '/images/mountabu3.jpg']
      },
      "Mahabalipuram Heritage": { 
        title: 'Mahabalipuram Heritage',
        description: `Explore the ancient rock-cut temples and sculptures of Mahabalipuram, a UNESCO World Heritage site on the Coromandel Coast.`,
        highlights: [
          'Train tickets included',
          'Beach resort stay',
          'Shore Temple tour',
          'Cultural dance show',
          'Local craft shopping'
        ],
        price: '$699',
        duration: '4 days',
        images: ['/images/mahabalipuram.jpg', '/images/mahabalipuram2.jpg', '/images/mahabalipuram3.jpg']
      },
      "Aurangabad Caves & Forts": { 
        title: 'Aurangabad Caves & Forts',
        description: `Discover the magnificent rock-cut caves of Ajanta and Ellora, along with historic forts in Aurangabad region.`,
        highlights: [
          'Train tickets included',
          'Comfortable hotel stay',
          'Ajanta & Ellora caves',
          'Daulatabad Fort visit',
          'Local cuisine tasting'
        ],
        price: '$749',
        duration: '5 days',
        images: ['/images/aurangabad.jpg', '/images/aurangabad2.jpg', '/images/aurangabad3.jpg']
      },
      "Konark Sun Temple Tour": { 
        title: 'Konark Sun Temple Tour',
        description: `Marvel at the architectural wonder of Konark's Sun Temple, along with Puri's beaches and Odisha's cultural heritage.`,
        highlights: [
          'Train tickets included',
          'Beachside hotel',
          'Sun Temple guided tour',
          'Puri beach visit',
          'Local handicraft shopping'
        ],
        price: '$649',
        duration: '4 days',
        images: ['/images/konark.jpg', '/images/konark2.jpg', '/images/konark3.jpg']
      },
      "Sundarbans Wildlife Safari": { 
        title: 'Sundarbans Wildlife Safari',
        description: `Embark on an exciting wildlife adventure in the Sundarbans, home to Royal Bengal tigers and unique mangrove ecosystem.`,
        highlights: [
          'Train tickets included',
          'Boat safari experience',
          'Professional guide',
          'Local homestay',
          'Mangrove forest exploration'
        ],
        price: '$899',
        duration: '5 days',
        images: ['/images/sundarbans.jpg', '/images/sundarbans2.jpg', '/images/sundarbans3.jpg']
      },
      "Jim Corbett Wild Adventure": { 
        title: 'Jim Corbett Wild Adventure',
        description: `Go on exciting wildlife safaris in India's oldest national park, home to diverse flora and fauna including tigers and elephants.`,
        highlights: [
          'Train tickets included',
          'Jungle lodge stay',
          'Safari rides',
          'Bonfire experience',
          'Nature walks'
        ],
        price: '$899',
        duration: '5 days',
        images: ['/images/corbett.jpg', '/images/corbett2.jpg', '/images/corbett3.jpg']
      },
      "Khajuraho Temple Tour": { 
        title: 'Khajuraho Temple Tour',
        description: `Explore the exquisite erotic sculptures and architectural marvels of Khajuraho's UNESCO-listed temple complex.`,
        highlights: [
          'Train tickets included',
          'Heritage hotel stay',
          'Temple complex tour',
          'Light & sound show',
          'Local craft market'
        ],
        price: '$799',
        duration: '4 days',
        images: ['/images/khajuraho1.jpg', '/images/khajuraho2.jpg', '/images/khajuraho3.jpg']
      },
      "Nainital Lake Retreat": { 
        title: 'Nainital Lake Retreat',
        description: `Enjoy the serene beauty of Nainital's pear-shaped lake, surrounded by hills and offering charming colonial-era ambiance.`,
        highlights: [
          'Train tickets included',
          'Lake view hotel',
          'Boating on Naini Lake',
          'Mall Road walk',
          'Snow View point visit'
        ],
        price: '$849',
        duration: '4 days',
        images: ['/images/nainital.jpg', '/images/nainital2.jpg', '/images/nainital3.jpg']
      },
      "Daman & Diu Island Escape": { 
        title: 'Daman & Diu Island Escape',
        description: `Relax on the beautiful beaches of Daman & Diu, with Portuguese heritage, water sports, and coastal cuisine.`,
        highlights: [
          'Train tickets included',
          'Beach resort stay',
          'Local sightseeing',
          'Water sports activities',
          'Portuguese fort visit'
        ],
        price : '$899',
        duration: '5 days',
        images: ['/images/daman.jpg', '/images/daman2.jpg', '/images/daman3.jpg']
      }
    
    
  };

  const details = destinationDetails[name] || {
    title: name,
    description: 'Detailed information coming soon...',
    highlights: [],
    price: 'Contact for price',
    duration: '7-10 days',
    images: [
      `https://source.unsplash.com/800x400/?${name.toLowerCase()}`,
      `https://source.unsplash.com/800x400/?travel-${name.toLowerCase()}`,
      `https://source.unsplash.com/800x400/?tourism-${name.toLowerCase()}`
    ]
  };

  return (
    <Container className="py-5">
      <Card className="destination-detail-card">
        <Row className="image-grid">
          {details.images.map((image, index) => (
            <Col xs={12} md={4} key={index}>
              <Card.Img variant="top" src={image} alt={`${name} ${index + 1}`} className="detail-image" />
            </Col>
          ))}
        </Row>
        <Card.Body>
          <h1 className="detail-title">{details.title}</h1>
          <p className="detail-description">{details.description}</p>
          
          {details.highlights.length > 0 && (
            <div className="highlights-section">
              <h3>Trip Highlights</h3>
              <ul>
                {details.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          <Row className="trip-info">
            <Col md={6}>
              <div className="info-item">
                <span className="label">Duration:</span>
                <span className="value">{details.duration}</span>
              </div>
            </Col>
            <Col md={6}>
              <div className="info-item">
                <span className="label">Price:</span>
                <span className="value">{details.price}</span>
              </div>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/bookings')}
            >
              Book Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DestinationDetail;
