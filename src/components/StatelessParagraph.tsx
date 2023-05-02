import { useEffect } from 'react';
export default function StatelessParagraph() {
  useEffect(() => {
    console.count('paragraph render');
  });
  return (
    <p style={{ color: 'white', width: '100%', fontSize: '20px' }}>
      This paragraph will not rerender with other children. and the parent component does not
      rerender either regardless of what is rerendering in children. open the console to check it
      out.(it will say 'paragraph render:' with the number of renders that have happened when this
      componenent rerenders)
      <br />
      Cancelling the interval (refresh page to uncancel), stops all state changes, which ends
      rerenders for that component and no others.
      <br></br>
      If you check the source code, you'll see I always clear my intervals in the useEffect cleanup
      function, because if I didn't I would keep building up more and more uncleared intervals in
      the background the flow of my component lifecycle would be thrown out of whack.
      <br />I would be queuing up a bunch of state changes and they would happen right in the middle
      of another cycle whenever react gets around to making that update. That's why if you remove
      the clear interval from the red-blue component you would see the count start to shoot up
      sporadically. A bunch of state updates will be queued up and executed because you didn't tell
      the interval to stop what it was doing before you created a new one
    </p>
  );
}
