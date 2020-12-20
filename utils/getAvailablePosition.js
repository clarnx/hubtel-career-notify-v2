import axios from "axios";
import jsdom from "jsdom";
import twilio from "twilio";

const { JSDOM } = jsdom;
const accountSid = process.env.TWILIO_ACC_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

const getAvailablePosition = async () => {
  const url = process.env.HUBTEL_CAREER_URL;
  try {
    const response = await axios.get(url);
    const data = response.data;
    const { window } = new JSDOM(data);
    const noPositionElement = window.document.querySelector(
      ".BambooHR-ATS-board .blankState"
    );

    if (noPositionElement) {
      const messageId = await client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.DESTINATION_PHONE_NUMBER,
        // body: process.env.OUTGOING_MESSAGE_BODY,
        body: noPositionElement.textContent,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default getAvailablePosition;
