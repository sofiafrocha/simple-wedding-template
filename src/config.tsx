/* SETTINGS */

export const weddingDate = "2025-09-06";

export const Hero = {
  title: "Leia & Han",
  photo: "/picture.jpg",
};

export const When = {
  title: "When",
  dayOfTheWeek: "Saturday",
  date: "6th September 2025",
  hours: "4PM",
};

export const Where = {
  title: "Where",
  venue: "Yoda Fountain",
  city: "San Francisco",
  map: {
    text: "Map",
    link: "https://maps.app.goo.gl/wK3YEU9YVkLBChBd9",
    googleMaps:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6110908889755!2d-122.45307622383562!3d37.79915307197924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085872a4f73f3fd%3A0xe9c90de80067ba0e!2sYoda%20Fountain!5e0!3m2!1sen!2spt!4v1743028581687!5m2!1sen!2spt",
  },
};

export const FAQ = {
  title: "Frequently Asked Questions",
  questions: [
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus tincidunt massa id lobortis. Sed luctus purus quis efficitur molestie. Cras sit amet tincidunt ex, semper rhoncus sapien. Cras vehicula viverra ipsum vulputate egestas.",
      photo: "/picture.jpg",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus tincidunt massa id lobortis. Sed luctus purus quis efficitur molestie. Cras sit amet tincidunt ex, semper rhoncus sapien. Cras vehicula viverra ipsum vulputate egestas.",
      photo: "/picture.jpg",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus tincidunt massa id lobortis. Sed luctus purus quis efficitur molestie. Cras sit amet tincidunt ex, semper rhoncus sapien. Cras vehicula viverra ipsum vulputate egestas.",
      photo: "/picture.jpg",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer: () => (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      ),
      photo: "/picture.jpg",
    },
  ],
};

export const Form = {
  title: "RSVP",
  deadline: "Please confirm until August 1st",
  main: {
    title: "Who's going?",
    remove: "Remove person",
    add: "Add person",
    maxGuests: 6,
  },
  extra: {
    title: "What else?",
    optionalText: "(Optional)",
    questions: [
      {
        id: "music",
        title: "Request Songs",
        details: "What do you want to dance to?",
        required: false,
      },
      {
        id: "notes",
        title: "Other comments",
        details: "Anything else you want to tell us?",
        required: false,
      },
    ],
  },
  confirm: "Confirm",
  attendeeSingular: "attendee",
  attendeePlural: "attendees",
};
