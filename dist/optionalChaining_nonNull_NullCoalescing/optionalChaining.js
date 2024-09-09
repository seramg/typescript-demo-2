"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
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
const lat_example3 = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.geo) === null || _b === void 0 ? void 0 : _b.lat;
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
    getFullAddress: function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        // Using optional chaining to safely access properties from the first address
        return `${this.name} from ${(_b = (_a = this.addresses) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.city}, ${(_d = (_c = this.addresses) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.district} (Lat: ${(_g = (_f = (_e = this.addresses) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.geo) === null || _g === void 0 ? void 0 : _g.lat}, Long: ${(_k = (_j = (_h = this.addresses) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.geo) === null || _k === void 0 ? void 0 : _k.long})`;
    }
};
// Combining optional chaining, array accessing, function calling, and object property access
const city = (_d = (_c = user3.addresses) === null || _c === void 0 ? void 0 : _c[1]) === null || _d === void 0 ? void 0 : _d.city; // Accessing city of second address
const latitudeValue = (_g = (_f = (_e = user3.addresses) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.geo) === null || _g === void 0 ? void 0 : _g.lat; // Accessing latitude of first address
const fullAddress = (_h = user3.getFullAddress) === null || _h === void 0 ? void 0 : _h.call(user3); // Function call to get full name
console.log(`City: ${city}`); // Output: City: Chennai
console.log(`Latitude: ${latitudeValue}`); // Output: Latitude: 8.5241
console.log(`Full Address: ${fullAddress}`); // Output: Sera from Thiruvananthapuram, Kerala (Lat: 8.5241, Long: 76.9366)
