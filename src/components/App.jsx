import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// function createEntry(emojiTerm) {
//   return (
//     <Entry
//       id={emojiTerm.id}
//       emoji={emojiTerm.emoji}
//       name={emojiTerm.name}
//       meaning={emojiTerm.meaning}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">

        {emojipedia.map(function (emojiTerm) {
          return (
            <Entry
              id={emojiTerm.id}
              emoji={emojiTerm.emoji}
              name={emojiTerm.name}
              meaning={emojiTerm.meaning}
            />
          );
        }  )   }

      </dl>
    </div>
  );
}

export default App;
