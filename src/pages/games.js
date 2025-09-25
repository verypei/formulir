import { useRef, useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";

export function MemoryGames() {
  // --------------------------------- STATE ---------------------------------
  const [level, setLevel] = useState(0);
  const [activeInputs, setActiveInputs] = useState(true);
  const [score, setActiveScore] = useState("");
  const [challenge, setChallenge] = useState([]);
  const [button, setButton] = useState({ status: true, str: "check" });
  const [inputs, setInputs] = useState(Array(level).fill(""));
  const [timeLeft, setTimeLeft] = useState(0); // countdown timer
  const timerRef = useRef(null); // store interval ID
  const [displayCircle, setDisplayCircle] = useState("none"); // countdown timer

  // --------------------------------- FUNCTION ---------------------------------

  const getCircleCount = (level) => {
    switch (level) {
      case 1:
        return 5;
      case 2:
        return 5;
      case 3:
        return 10;
      case 4:
        return 10;
      case 5:
        return 15;
      case 6:
        return 15;
      default:
        return 0;
    }
  };

  const generateRandomNumbers = (count) => {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 10));
  };

  const generateRandomNumbersAndAlphabet = (count) => {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyz0123456789ABCDEF0123456789GHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from(
      { length: count },
      () => chars[Math.floor(Math.random() * chars.length)]
    );
  };

  const getTimeForLevel = (level) => {
    switch (level) {
      case 1:
        return 5;
      case 2:
        return 10;
      case 3:
        return 15;
      case 4:
        return 20;
      case 5:
        return 25;
      case 6:
        return 30;
      default:
        return 0;
    }
  };

  const runProcedure = (selectedLevel) => {
    const count = getCircleCount(selectedLevel);
    if (selectedLevel % 2 === 0) {
      setChallenge(generateRandomNumbersAndAlphabet(count));
    } else {
      setChallenge(generateRandomNumbers(count));
    }

    // set timer
    const time = getTimeForLevel(selectedLevel);
    setTimeLeft(time);

    // start countdown
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current); // stop timer when it hits 0
          setDisplayCircle("block");
          setActiveInputs(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleLevelChange = (e) => {
    resetAll();
    const selectedLevel = Number(e.target.value);
    setLevel(selectedLevel);

    if (timerRef.current) {
      clearInterval(timerRef.current); // clear any running timer
      setDisplayCircle("none");
    }

    runProcedure(selectedLevel);
  };

  const handleInputChange = (value, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  const resetAll = () => {
    setLevel(0);
    setActiveInputs(true);
    setActiveScore("");
    setChallenge([]);
    setInputs([]);
    setDisplayCircle("none");
    setButton({ status: true, str: "check" });
    clearInterval(timerRef.current);
    setTimeLeft(0);
  };

  const handleCheckScoring = (e) => {
    setActiveInputs(true);
    if (
      challenge.length === inputs.length &&
      challenge.every((value, index) => value === inputs[index])
    ) {
      setActiveScore("good");
    } else {
      setActiveScore("false");
    }
    setButton({ status: false, str: "play again" });
    if (!button.status) {
      resetAll();
    }
  };

  // --------------------------------- USE EFFECT ---------------------------------

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <Container fluid className="p-3">
      <div className="row">
        <div className="col-3">
          <Form.Select
            aria-label="Default select example"
            onChange={handleLevelChange}
            value={level}
          >
            <option>Select level</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Select>
        </div>
        <div className="col-5 offset-1">
          {/* Timer Display */}
          <div className="row">
            <div className="col-3">
              <h4>
                Time Left:{" "}
                <span style={{ color: timeLeft <= 5 ? "red" : "black" }}>
                  {timeLeft}s
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------- CHALLENGE CIRCLE -------------------------------------*/}
      <div className="row mt-4">
        <div className="col-12">
          <div className="d-flex flex-wrap gap-3">
            {challenge.map((num, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                {activeInputs ? num : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------- INPUT CIRCLE -------------------------------------*/}
      {displayCircle === "block" && (
        <div>
          <div className="row mt-4 hidden">
            <div className="d-flex flex-wrap gap-3">
              {challenge.map((num, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                    display: displayCircle,
                  }}
                >
                  <input
                    type="text"
                    value={inputs[index]}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    maxLength={1} // Only 1 character allowed
                    className="text-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "none",
                      outline: "none",
                      borderRadius: "50%",
                      textAlign: "center",
                      fontSize: "18px",
                      fontWeight: "bold",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-4">
              <Button variant="primary" onClick={handleCheckScoring}>
                {button.status ? button.str : button.str}
              </Button>
            </div>
          </div>
          <div className="row">
            <h1>{score}</h1>
          </div>
        </div>
      )}
    </Container>
  );
}
