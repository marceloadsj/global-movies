import React from "react";

import Icon from "components/Icon";

export default function VoteTag({ value }) {
  return (
    <div className="bg-gray-900 rounded-full px-2 flex items-center text-gray-400">
      <Icon name="star" className="mr-1" /> {value}
    </div>
  );
}
