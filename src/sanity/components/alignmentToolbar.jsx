// sanity/components/alignmentToolbar.jsx
import React from "react";
import { Flex, Button, Tooltip } from "@sanity/ui";
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";

export function AlignmentToolbar(props) {
  const { value, onChange, renderDefault } = props;
  const current = value?.textAlign || "left";

  const setAlign = (align) => {
    onChange({ ...value, textAlign: align });
  };

  return (
    <div>
      {renderDefault && renderDefault(props)}
      <Flex gap={2} padding={2} style={{ borderTop: "1px solid #eee" }}>
        <Tooltip content="Do lewej">
          <Button
            mode={current === "left" ? "default" : "ghost"}
            icon={AlignLeft}
            onClick={() => setAlign("left")}
          />
        </Tooltip>
        <Tooltip content="Wyśrodkowany">
          <Button
            mode={current === "center" ? "default" : "ghost"}
            icon={AlignCenter}
            onClick={() => setAlign("center")}
          />
        </Tooltip>
        <Tooltip content="Do prawej">
          <Button
            mode={current === "right" ? "default" : "ghost"}
            icon={AlignRight}
            onClick={() => setAlign("right")}
          />
        </Tooltip>
        <Tooltip content="Justowanie">
          <Button
            mode={current === "justify" ? "default" : "ghost"}
            icon={AlignJustify}
            onClick={() => setAlign("justify")}
          />
        </Tooltip>
      </Flex>
    </div>
  );
}
