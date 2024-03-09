import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  a: {
    color: "blue",
    textDecorationLine: "underline",
  },
  alert: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
  },
  plusOneButton: {
    backgroundColor: "blue",
    padding: 20,
    margin: 10,
    width: "40%",
    borderRadius: 10,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  plusOneButtonText: {
    color: "white",
    fontSize: 25,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  event: {
    padding: 20,
    margin: 10,
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 10,
  },

  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
  },
  h3: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
  },
  h100: {
    height: "100%",
  },
  mainScrollView: {},
  h90: {
    height: "90%",
  },
  input: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  mxAuto: {
    marginHorizontal: "auto",
  },
  nav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "10%",
  },
  navImg: {
    width: 35,
    height: 35,
  },
  navImgBg: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 15,
    paddingTop: 10,

    paddingBottom: 15,
  },
  outerEventsBox: {
    backgroundColor: "lightblue",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  page: {
    paddingTop: 70,
    height: "100%",
  },
  p: {
    paddingBottom: 10,
  },
  pAbsolute: {
    position: "absolute",
    zIndex: 1,
  },
  pCenter: {
    textAlign: "center",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  picker: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  punch: {
    padding: 10,
    margin: 10,
    width: "40%",
    height: 80,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  punchComplete: { backgroundColor: "lightgreen" },
  punchContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  qr: {
    margin: 30,
  },
  qrContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  rootContainer: {
    height: "100%",
  },
  scanAgainButton: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
  },
  scanAgainText: {
    color: "white",
  },
  scanHeader: {
    height: "15%",
  },
  scanner: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
  },
  scannerContainer: {
    height: "85%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  subHeading: {
    fontSize: 18,
    paddingBottom: 10,
    textAlign: "center",
  },
  summaryContainer: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "lightgray",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  textBlack: {
    color: "black",
  },
  textWhite: {
    color: "white",
  },
  w100: {
    width: "100%",
  },
});

export default styles;
