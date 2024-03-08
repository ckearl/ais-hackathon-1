import React, { useContext, useState } from "react";
import { Text, View, ScrollView, Button, TextInput } from "react-native";
import styles from "../../Styles";
import EventContext from "../../Context/EventContext";
import { A } from "@expo/html-elements";
import Constants from "../../Constants";
import UserContext from "../../Context/UserContext";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { CreateEvent } from "../../API/CreateEvent";

function EventSummaries() {
  const events = useContext(EventContext).eventSummaries.scansPerEvent;
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.h1}>Last 5 Events</Text>
      {Object.keys(events).map((eventId, i) => {
        const event = events[eventId];
        return (
          <View key={i} style={styles.event}>
            <Text style={styles.h2}>{event.name}</Text>
            <Text style={styles.subHeading}>{new Date(event.date).toLocaleDateString()}</Text>
            <Text style={styles.pCenter}> attendees: {event.numScans}</Text>
          </View>
        );
      })}
    </View>
  );
}

function RaffleEligibleStudents() {
  const raffleEligibleStudents = useContext(EventContext).eventSummaries.raffleEligibleStudents;
  const numStudents = raffleEligibleStudents.length;
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.h2}>Raffle Eligible Students</Text>

      <Text style={styles.pCenter}>
        {numStudents} student{numStudents === 1 ? " is" : "s are"} eligible for the raffle
      </Text>
      <Text style={styles.pCenter}>
        Go to{" "}
        <A style={styles.a} href={Constants.API_STUDENT_RAFFLE_URL}>
          {Constants.API_STUDENT_RAFFLE_URL}
        </A>{" "}
        to download the list of eligible students.
      </Text>
    </View>
  );
}

function TotalAttendance() {
  const totalAttendance = useContext(EventContext).eventSummaries.totalAttendance;
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.h1}>Total Semester Attendance</Text>
      <Text style={styles.pCenter}>{totalAttendance}</Text>
    </View>
  );
}

type TCreatEventButtonProps = {
  currentComponent: TCurrentComponent;
  setCurrentComponent: React.Dispatch<React.SetStateAction<TCurrentComponent>>;
};

function CreateEventButton({ currentComponent, setCurrentComponent }: TCreatEventButtonProps) {
  const title = currentComponent === "main" ? "Create Event" : "Back to Dashboard";
  const onPress =
    currentComponent === "main"
      ? () => setCurrentComponent("createEvent")
      : () => setCurrentComponent("main");
  return <Button title={title} onPress={onPress} />;
}

function CreateEventComponent({
  setCurrentComponent,
}: {
  setCurrentComponent: React.Dispatch<React.SetStateAction<TCurrentComponent>>;
}) {
  const { setRefreshEventInfo, refreshEventInfo } = useContext(EventContext);
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [waiverUrl, setWaiverUrl] = useState("");
  const [eventLocation, setEventLocation] = useState("");

  const [eventDate, setEventDate] = useState(new Date());
  const [eventStartTime, setEventStartTime] = useState(new Date());
  const [eventEndTime, setEventEndTime] = useState(new Date());

  const user = useContext(UserContext).user;

  const submitHandler = async () => {
    const startTime = new Date(eventDate.getTime());
    startTime.setHours(eventStartTime.getHours());
    startTime.setMinutes(eventStartTime.getMinutes());

    const endTime = new Date(eventDate.getTime());
    endTime.setHours(eventEndTime.getHours());
    endTime.setMinutes(eventEndTime.getMinutes());

    const params = {
      title: eventName,
      startTime: startTime,
      endTime: endTime,
      type: eventType,
      notes: eventDescription,
      waiverUrl: waiverUrl,
      location: eventLocation,
      createdBy: user.netId,
    };

    const data = await CreateEvent(params);
    if (data.status === "success") {
      alert("Event created successfully");
      setCurrentComponent("main");
      setRefreshEventInfo(!refreshEventInfo);
    } else if (data.errorCode === "insufficientData") {
      alert("Event Creation Failed. Please fill out all required fields");
    }
  };

  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || eventDate;
    setEventDate(currentDate);
  };

  const onStartTimeChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || eventStartTime;
    setEventStartTime(currentDate);
  };

  const onEndTimeChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || eventEndTime;
    setEventEndTime(currentDate);
  };

  return (
    <View style={{ marginBottom: 500 }}>
      <Text style={styles.h1}>Create an Event</Text>
      <TextInput
        style={styles.input}
        onChange={(e) => setEventName(e.nativeEvent.text)}
        placeholder="Event Name"
      />
      <View style={styles.dateContainer}>
        <Text>Event Date</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={eventDate}
          mode={"date"}
          is24Hour={true}
          onChange={onDateChange}
        />
      </View>
      <View style={styles.dateContainer}>
        <Text>Start Time</Text>
        <DateTimePicker
          minuteInterval={5}
          testID="dateTimePicker"
          value={eventStartTime}
          mode={"time"}
          is24Hour={true}
          onChange={onStartTimeChange}
        />
      </View>

      <View style={styles.dateContainer}>
        <Text>End Time</Text>
        <DateTimePicker
          minuteInterval={15}
          testID="dateTimePicker"
          value={eventEndTime}
          mode={"time"}
          is24Hour={true}
          onChange={onEndTimeChange}
        />
      </View>

      <Text style={styles.h3}>Event Type</Text>
      <Picker
        style={styles.picker}
        selectedValue={eventType}
        onValueChange={(itemValue, itemIndex) => setEventType(itemValue)}
      >
        {Object.keys(Constants.eventTypeThresholds).map((type, i) => (
          <Picker.Item key={i} label={type} value={type} />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        onChange={(e) => setEventDescription(e.nativeEvent.text)}
        placeholder="Event Description (optional)"
      />
      <TextInput
        style={styles.input}
        onChange={(e) => setWaiverUrl(e.nativeEvent.text)}
        placeholder="Waiver Url (optional)"
      />
      <TextInput
        style={styles.input}
        onChange={(e) => setEventLocation(e.nativeEvent.text)}
        placeholder="Event Location"
      />
      <Button title="Create Event" onPress={submitHandler} />
    </View>
  );
}

type TCurrentComponent = "main" | "createEvent";

export default function Dash() {
  const [currentComponent, setCurrentComponent] = useState<TCurrentComponent>("main");

  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.h1}>Admin Dashboard</Text>
        <CreateEventButton
          currentComponent={currentComponent}
          setCurrentComponent={setCurrentComponent}
        />
        {currentComponent === "main" ? (
          <View>
            <TotalAttendance />
            <RaffleEligibleStudents />
            <EventSummaries />
          </View>
        ) : (
          <CreateEventComponent setCurrentComponent={setCurrentComponent} />
        )}
      </View>
    </ScrollView>
  );
}
