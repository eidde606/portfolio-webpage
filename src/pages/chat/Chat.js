import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

import React, { useRef, useState } from "react";
import "./ChatStyle.css"; // Import your CSS file here

import "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAl6iIU2lkb0_hSCyX7P48W7v6w1o0o5tY",
  authDomain: "portfolio-chat-d8521.firebaseapp.com",
  projectId: "portfolio-chat-d8521",
  storageBucket: "portfolio-chat-d8521.appspot.com",
  messagingSenderId: "241701581462",
  appId: "1:241701581462:web:9b16d14f3637133e4a48b7",
  measurementId: "G-Y2ZYLRV38B",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const Chat = () => {
  const [user] = useAuthState(auth);

  return (
    <Container fluid className="chat-app">
      <header>
        <SignOut />
      </header>
      <Row>
        <Col>{user ? <ChatRoom /> : <SignIn />}</Col>
      </Row>
    </Container>
  );
};

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <div className="p">
        <p>
          Do not violate the community guidelines or you will be banned for
          life!
        </p>
      </div>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage} className="input-container">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          <p className="sendbtn">Send</p>
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          alt="img"
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default Chat;
