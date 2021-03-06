import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Question.module.css";

interface QuestionProps {
  firstname: string;
  lastname: string;
  userid: string;
}

type sb = {
  question: string;
  firstname: string;
  lastname: string;
};

export default function Question(props: QuestionProps) {
  const [question, setquestion] = useState("");
  const navigate = useNavigate();

  let s = {
    question: question,
    firstname: props.firstname,
    lastname: props.lastname,
    userid: props.userid,
  };
  return (
    <div className={styles.container}>
      <div className={styles.childcontainer}>
        <h1>Enter Your Question</h1>
        <input
          type="textbox"
          id="firstname"
          name="firstname"
          // placeholder="First Name"
          onChange={(e) => {
            setquestion(e.target.value);
            console.log(props.firstname);

            //   apidata.map((data) => {
            //     data.answer.push(answer);
            //   });
          }}
          style={{ marginLeft: "7px" }}
        />
        <br></br>
        <button
          className={styles.btn}
          onClick={() => {
            // apidata.push(an)
            const requestOptions = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(s),
            };
            fetch(`http://localhost:9000/questions`, requestOptions)
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                alert("Question Posted successfully");
              });
            navigate("/forum");
          }}
        >
          submit
        </button>
        <br />
      </div>
    </div>
  );
}
