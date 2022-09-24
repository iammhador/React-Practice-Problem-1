import React from "react";
import "./Article.css";

const Article = () => {
  const extraP = {
    color: "white",
    fontWeight: "bold",
  };
  return (
    <div className="blog">
      <article>
        <h1>
          Nvidia officially announces RTX 4080 and RTX 4090 graphics cards
        </h1>
        <p
          style={{
            padding: "0 80px",
            color: "gray",
            fontWeight: "bold",
          }}
        >
          US graphics card maker Nvidia recently announced that it will be
          officially launching its RTX 40 series GPUs in the global market next
          month. According to Nvidia, the powerful RTX 4090 boasts a massive
          24GB of GDDR6X RAM and will use the same amount of power as the RTX
          3090 Ti while being 2 to 4 times quicker. <br />
          <br />
          Nvidia recommends using a power supply of at least 850 watts for the
          latest flagship RTX 4090 GPU. On the other hand, the RTX 4080 comes in
          two variants, one with 12GB of GDDR6X memory and another with 16GB of
          GDDR6X RAM. <br />
          <br /> According to Nvidia, the RTX 4080 will be 2 to 4 times faster
          than the currently available RTX 3080 Ti GPU. Both RTX 40 series GPUs
          are powered by Nvidia's next-gen Ada Lovelace architecture. <br />
          <br />
        </p>
        <p style={extraP}>
          The RTX 4000 series cards will also include new Nvidia ShadowPlay
          support to capture gameplay at up to 8K resolution at 60 FPS in HDR.
          The Nvidia RTX 4090 will be available globally from October 12 and is
          set to cost USD 1,599, while the RTX 4080 will be available in
          November and its price starts at USD 899.
        </p>
      </article>
    </div>
  );
};

export default Article;
