import { useEffect } from 'react';
export default function StatelessParagraph() {
  useEffect(() => {
    console.count('paragraph render');
  });
  return (
    <p style={{ color: 'white', width: '100%' }}>
      This paragraph will not rerender with other children. and the parent component does not
      rerender either regardless of what is rerendering in children. open the console to check it
      out.
      <br />
      Cancelling the interval (refresh page to uncancel), stops all state changes, which ends
      rerenders for that component and no others.
      <br></br>
      If you check the source code, you'll see I always clear my intervals in the useEffect cleanup
      function, because if I didn't I would keep building up more and more uncleared intervals in
      the background and
    </p>
  );
}
