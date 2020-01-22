import React from "react";

function Description({ city }) {
  const data = {
    dornbirn:
      "Dornbirn is the largest city in Vorarlberg and the tenth largest in Austria. It is an important commercial and shopping centre.",
    lech:
      "Lech am Arlberg is a mountain village and an exclusive ski resort in the Bludenz district in the Austrian state of Vorarlberg on the banks of the river Lech.",
    madrid:
      "Madrid is the capital and most populous city of Spain. As the capital city of Spain, seat of government, and residence of the Spanish monarch, Madrid is also the political, economic and cultural centre of the country."
  };

  return <div>{data[city]}</div>;
}

export default Description;
