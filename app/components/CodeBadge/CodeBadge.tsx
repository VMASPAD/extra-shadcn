"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react"; // Asegúrate de importar los iconos correctos

interface CodeBadgeProps {
  children: React.ReactNode;
  iconCopy?: boolean;
}

function CodeBadge({ children, iconCopy }: CodeBadgeProps) {
  const [buttonCopy, setButtonCopy] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setButtonCopy(true);
      setTimeout(() => setButtonCopy(false), 2000);
    });
  };

  const handleClick = () => {
    copyToClipboard(children.toString());
  };

  if (iconCopy === true) {
    return (
      <>
        <div className="relative border-primary border-[1px] rounded-lg p-2">
          <pre>
            <code>{children}</code>
          </pre>
          <Badge
            onClick={handleClick}
            className="bg-primary absolute top-0 right-0 mt-[1%] mr-[1%] cursor-pointer"
          >
            {buttonCopy ? <Check className="w-4" /> : <Copy className="w-4" />}
          </Badge>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="relative border-primary border-[1px] rounded-lg p-2">
          <pre>
            <code>{children}</code>
          </pre>
        </div>
      </>
    );
  }
}

export default CodeBadge;