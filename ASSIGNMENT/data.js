// database of pets, pets breed, pet age, owners name , telephone numbers, and appointments
const pets = [
    {
        id: 1,
        name: 'Fido',
        breed: 'Labrador',
        age: 3,
        owner: 'John',
        telephone: '555-555-5555',
        appointments: [

            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            },
        ]
    },
    {
        id: 2,
        name: 'Spot',
        breed: 'Poodle',
        age: 2,
        owner: 'Jane',
        telephone: '555-555-5555',
        appointments: [
            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            },

        ]
    },
    {
        id: 3,
        name: 'Rover',
        breed: 'Pitbull',
        age: 1,
        owner: 'John',
        telephone: '555-555-5555',
        appointments: [
            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            },
            {
                date: '01/01/2020',
                time: '10:00',
                reason: 'checkup'
            }
        ]
    }
];

module.exports = pets;