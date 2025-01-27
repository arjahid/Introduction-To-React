export default function Todo({ task, isDone }) {
  if (isDone === true) {
    return <li>Finidsh:{task}</li>;
  } else {
    return <li>work on:{task}</li>;
  }
}
