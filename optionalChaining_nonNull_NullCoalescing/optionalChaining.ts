// address is an optional parameter
const user = {
  id: 1,
  name: "Sera",
  age: 23,
  address: {
    city: "Thiruvananthapuram",
    district: "Kerala",
    geo: {
      lat: 8.5241,
      long: 76.9366,
    }, // Remove to show the change
  },
};

// If the user has entered all the values including the optional ones
const lat_example1 = user.address.geo.lat;

// But what if some of the users have not entered the lat and long values
const lat_example2 = user.address && user.address.geo && user.address.geo.lat;
// Optional Chaining
const lat_example3 = user?.address?.geo?.lat;


console.log(lat_example1);



// function optional chaining

// const lat_example4  = user.address.geo?.()


const user3 = {
    id: 1,
    name: 'Sera',
    age: 23,
    addresses: [
        {
            city: 'Thiruvananthapuram',
            district: 'Kerala',
            geo: {
                lat: 8.5241,
                long: 76.9366
            }
        },
        {
            city: 'Chennai',
            district: 'Tamil Nadu',
            geo: {
                lat: 13.0827,
                long: 80.2707
            }
        }
    ],
    getFullAddress: function() {
        // Using optional chaining to safely access properties from the first address
        return `${this.name} from ${this.addresses?.[0]?.city}, ${this.addresses?.[0]?.district} (Lat: ${this.addresses?.[0]?.geo?.lat}, Long: ${this.addresses?.[0]?.geo?.long})`;
    }
};

// Combining optional chaining, array accessing, function calling, and object property access
const city = user3.addresses?.[1]?.city; // Accessing city of second address
const latitudeValue = user3.addresses?.[0]?.geo?.lat; // Accessing latitude of first address
const fullAddress = user3.getFullAddress?.(); // Function call to get full name

console.log(`City: ${city}`);           // Output: City: Chennai
console.log(`Latitude: ${latitudeValue}`);   // Output: Latitude: 8.5241
console.log(`Full Address: ${fullAddress}`);  // Output: Sera from Thiruvananthapuram, Kerala (Lat: 8.5241, Long: 76.9366)
