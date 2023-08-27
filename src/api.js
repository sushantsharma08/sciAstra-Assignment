const mentorsData = [
  {

    id: "9d5efa35-e84e-4c7b-8e92-f849af904f65",
    firstName: "John",
    lastName: "Doe",
    image: "https://picsum.photos/203",
    university: {
      name: "Cambridge University",
      city: "London",
      country: "UK"
    },
  },
  {
    id: "68face75-7fba-4024-a714-fb7dbed86244",
    firstName: "Jane",
    lastName: "Doe",
    image: "https://picsum.photos/204",
    university: {
      name: "Oxford University",
      city: "London",
      country: "UK"
    },
  },
  {
    id: "c1b0b7a9-5b1a-4b7a-8b9a-5b9b8b0b7a9c",
    firstName: "John",
    lastName: "Smith",
    image: "https://picsum.photos/205",
    university: {
      name: "Harvard University",
      city: "Boston",
      country: "USA"
    },
  },
  {
    id: "fae90ef1-4f54-4306-b79d-d32c32d67933",
    firstName: "Muriel",
    lastName: "Smith",
    image: "https://picsum.photos/206",
    university: {
      name: "Massachusetts Institute of Technology",
      city: "Boston",
      country: "USA"
    },
  },
  {
    id: "c576158a-af84-47f6-9cf3-edb25a4cea69",
    firstName: "Jane",
    lastName: "McNaught",
    image: "https://picsum.photos/207",
    university: {
      name: "Stanford University",
      city: "Stanford",
      country: "USA"
    },
  },
  {
    id: "c576158a-af84-47f6-9cf3-eHb25a4cha69",
    firstName: "Nico",
    lastName: "McNaught",
    image: "https://picsum.photos/208",
    university: {
      name: "Waterloo University",
      city: "Stanford",
      country: "USA"
    },
  },
  {
    id: "c576158a-af84-47f6-9cf3-edb2Ha4cda69",
    firstName: "Sarah",
    lastName: "McNaught",
    image: "https://picsum.photos/209",
    university: {
      name: "University of Toronto",
      city: "Toronto",
      country: "CANADA"
    },
  },
  {
    id: "c576158a-af84-47f6-9cf3-edb25H4cda69",
    firstName: "Sam",
    lastName: "McNaught",
    image: "https://picsum.photos/210",
    university: {
      name: "University of Waterloo",
      city: "Waterloo",
      country: "CANADA"
    },
  },
  {
    id: "c576158a-af84-47f6-9cf3-edb25a4cda69",
    firstName: "John",
    lastName: "Pearson",
    image: "https://picsum.photos/211",
    university: {
      name: "University of British Columbia",
      city: "Vancouver",
      country: "CANADA"
    },
  },
];

const mentosAndAdvisors = [
  {
    id: "9d5efa35-e84e-4c7b-8e92-f849af904f65",
    firstName: "Vivek",
    lastName: "Diwedi",
    designation: "Founder SciAstra, Mentor, Qualified NEST, JEE advanced, Mains, Master's Student at NISER",
    image: "https://picsum.photos/201",
  },
  {
    id: "68face75-7fba-4024-a714-fb7dbed86244",
    firstName: "Rahul",
    lastName: "Ambani",
    designation: "Cofounder SciAstra, Mentor, Qualified NEST, JEE advanced, Master's Student at NISER",
    image: "https://picsum.photos/202",
  },
];

export function getMentorsAndAdvisors() {
  return mentosAndAdvisors;
}

export function getMentors() {
  return mentorsData;
}

export function getUniversities() {
  return mentorsData.map(mentor => mentor.university)
    .filter((university, index, self) => self.findIndex(u => u.name === university.name) === index);
}




