const LOCAL_API_URL = "http://hackathon.corbanpro.net:8080";

type TConstants = {
  API_URL: string;
  API_STUDENT_RAFFLE_URL: string;
  eventTypeThresholds: { [key: string]: { name: string; threshold: number } };
};

const Constants: TConstants = {
  API_URL: LOCAL_API_URL,
  API_STUDENT_RAFFLE_URL: LOCAL_API_URL + "/StudentRaffle",

  //if you update these values, don't forget to update the backend as well.
  //backend: backend/BackendTypes/db.ts
  eventTypeThresholds: {
    socialize: {
      name: "Socialize",
      threshold: 1,
    },
    learn: {
      name: "Learn",
      threshold: 1,
    },
    serve: {
      name: "Serve",
      threshold: 1,
    },
    discover: {
      name: "Discover",
      threshold: 1,
    },
    connect: {
      name: "Connect",
      threshold: 1,
    },
    total: {
      name: "Total",
      threshold: 10,
    },
  },
};

export default Constants;
