# AIS Winter Hackathon!!!

Welcome to my submission to the AIS Winter 2024 Hackathon! I had a blast developing this, and I hope you have as good an experience as I have!

I am a one man team, so my submission likely will not be as polished as some of the others, but what it lacks in styling, I hope it makes up for in logical, scalable organization. I put a great deal of effort into designing an app that is built to grow, and I am confident that new features can be quickly and easily added to the current framework.

With the limited time that I had, I chose to focus all my effort into creating a functional app infrastructure that would convey how intuitive the user journey will be with the qr codes. I knew that any styling i did would more than likely change, so I chose a minimal design that would be easy to work with in the future.

Now that you've gotten an introduction. Let's jump in!!

## Getting Started

To start the app, run the following commands:

- cd frontend
- npm install
- npm start

While that runs (it takes a minute), go to the app store and download the Expo Go app onto your phone. The Expo Go app is a platform for the react native app. Think of it as the mobile app version of http://localhost:3000.

By the time the app has downloaded, you should see a qr code in your terminal window. Scan that qr code, and you're up and running!

## Logging In

The app will open on a login page. In the finished app, this will prompt you to go to the BYU SSO just like any other BYU site. For now, it simply prompts you for a netId. If you log in as an admin, you will be able to switch back and forth between the user and admin views, so the user profile is really only for testing.

-admin net id: johndoe24
-user net id: janesmith101

## App Walkthrough

#### Home Page

The home page currently only houses upcoming events. It can be a place for AIS officers to put announcements, flyers, and updates. The home page is the same for both admin and users.

#### Qr Code Page

The user's qr code page will first prompt them to select if they have a plus-one with them, and it will encode their net id and plus one status into a qr code.

The admin qr code page will first ask the administrator to choose the event they are scanning events into, and then will ask for camera permission and open the camera to scan the qr code. Scan the code below to test it out!\*

![alt text](IMG_7478.PNG)

\*Note: If you get an error that says "duplicate scan" that means someone else scanned this code first. The netId and eventId are a composite primary key, so a member may not attend an event twice. To test out the scanner again, create a new event on the admin dashboard page.

\*Another Note: Expo's BarCodeScanner component has been deprecated in favor of the CameraNext component, but the new version is unstablewith incomplete and incorrect documentation. Expo will warn you that the camera has been deprecated, but I have reviewed why they have abandoned the barcode scanner, and I didn't find anything concerning. Links to the documentation:
https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/
https://docs.expo.dev/versions/latest/sdk/camera-next/

#### Dashboard

The user dashboard will show them their progress toward raffle eligibility, and will include a list of all events that they have attended.

The admin dashboard will show:

- The total semester attendance for all events
- The number of students currently elligible for the raffle and a link to the full list\*
- A button that leads to a form to create a new event
- The most recent events along with their total attendance

\*Note: As of now, this link is not password protected, and it serves up net ids. I am unfamiliar with information security laws, but this may need to be addressed

#### Settings

Admin may switch back and forth between the admin and user views, and users may log out

## Next Steps

Given another week to implement more features, I would include:

- Full CRUD capabilities for events (currently admin may only add events)
- More detail on the home page, including other announcements and club updates.
- Additional insightful event summaries for officers (ex: "top event this semester")
- Events are not seperated by semester, so the database needs a semester table.
- Security updates, including password protection on the eligible student list.

## Conclusion

Thank you for taking the time to consider my sumbmission to the AIS Winter 2024 Hackathon! I had a blast developing it, and if you have any issues getting it up and running, reach out and let me know at cgp27@byu.edu.
