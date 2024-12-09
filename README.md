
# Task: Create a Countdown Timer Component with External Controls
Build a React component named CountdownTimer that includes the following functionality:

Requirements:
- Timer Display:

   - The component should display the remaining time in hh:mm:ss format (e.g., 00:02:30 for 2 minutes and 30 seconds).
- Timer Behavior:
   - The timer should count down every second when running.
   - When the timer reaches 00:00:00, it should stop automatically.
- Controls Inside the Component:
   - Pause/Unpause Button: Pauses and resumes the timer.
   - Stop Button: Stops the timer and resets it to the initial value.
   - Add/Subtract Buttons: Allow the user to add or subtract seconds (e.g., +10s, -10s) from the remaining time, even when the timer is running.
- Ensure the timer doesn’t go below 00:00:00.
- External Controls:
   - Add the ability to control the timer from outside the CountdownTimer component by exposing the following functions via props:
   - Start Timer: Starts or resumes the timer.
   - Pause Timer: Pauses the timer.
   - Reset Timer: Resets the timer to the initial value.
   - Add Time: Adds a specified number of seconds to the timer.
   - Subtract Time: Subtracts a specified number of seconds from the timer.
Example Usage:

```js
const App = () => {
  let timerRef;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer
        ref={timerRef}
      />
      <div>
        <h2>External Controls</h2>
        <button onClick={() => timerRef.start()}>Start</button>
        <button onClick={() => timerRef.pause()}>Pause</button>
        <button onClick={() => timerRef.reset()}>Reset</button>
        <button onClick={() => timerRef.add(10)}>+10 Seconds</button>
        <button onClick={() => timerRef.subtract(10)}>-10 Seconds</button>
      </div>
    </div>
  );
};
```

### Expected Behavior:
- The timer should function as described, with internal and external controls.
- External buttons should interact with the CountdownTimer component using the exposed functions