import React, { useContext } from "react";
import GuideForm from "./GuideForm";
import { GuidesContext } from "../Context";
import Guide from "./Guide";

function GuideList() {

  const [guides] = useContext(GuidesContext);

  return (
    <div className="guide-container">
      {guides.map((guide) => {
        return (
          <Guide
            title={guide["title"]}
            text={guide["text"]}
            author={guide["author"]}
            url={guide["url"]}
            key={guide.id}
            guide= {guide}
          />
        );
      })}
    </div>
  );
}

export default GuideList;
