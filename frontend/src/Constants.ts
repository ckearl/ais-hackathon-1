const LOCAL_API_URL = "http://192.168.1.245:8080";

const Constants = {
  API_URL: LOCAL_API_URL,
  API_STUDENT_RAFFLE_URL: LOCAL_API_URL + "/StudentRaffle",

  //if you update these values, don't forget to update the backend as well.
  eventTypeThresholds: {
    socialize: 2,
    learn: 2,
    serve: 4,
    discover: 4,
    connect: 3,
  },
};

export default Constants;
